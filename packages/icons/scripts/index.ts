import fs from "fs";
import path from "path";
import { XMLParser, XMLBuilder } from "fast-xml-parser";
import { error, log } from "console";

const svgDirectory = path.join(__dirname, "..", "lib", "assets");
const outputDirectory = path.join(__dirname, "..", "dist");
const indexFilePath = path.join(__dirname, "..", "dist", "index.ts");

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}
const toPascalCase = (str: string) =>
  str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());

fs.readdir(svgDirectory, (err, files) => {
  if (err) {
    error("Error reading SVG directory:", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const componentName = toPascalCase(path.basename(file, ".svg"));
      const svgContent = fs.readFileSync(path.join(svgDirectory, file), "utf8");

      // Parse the SVG content to JSON
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "",
      });
      const svgJson = parser.parse(svgContent);

      // Update attributes and structure
      if (svgJson.svg) {
        delete svgJson.svg.height;
        delete svgJson.svg.width;
        delete svgJson.svg.viewBox;

        if (svgJson.svg["fill-rule"]) {
          svgJson.svg.fillRule = svgJson.svg["fill-rule"];
          delete svgJson.svg["fill-rule"];
        }

        svgJson.svg["height"] = `{iconSize[fontSize]}`;
        svgJson.svg["width"] = `{iconSize[fontSize]}`;
        svgJson.svg["viewBox"] = `0 0 24 24`;
        svgJson.svg["fill"] = `{color ? iconColor[color]: htmlColor}`;
        svgJson.svg["className"] = `{className}`;
        svgJson.svg["focusable"] = `false`;
        svgJson.svg["aria-hidden"] = `{!titleAccess}`;
        svgJson.svg["{...props}"] = true;

        if (svgJson.svg) {
          const existingContent = svgJson.svg["#text"] || "";
          svgJson.svg[
            "#text"
          ] = `${existingContent}{titleAccess && <title>{titleAccess}</title>}`;
        }

        // Convert JSON back to XML
        const builder = new XMLBuilder({
          ignoreAttributes: false,
          attributeNamePrefix: "",
          format: true,
          suppressBooleanAttributes: true,
          processEntities: false,
        });

        let updatedSvg = builder.build(svgJson);

        updatedSvg = updatedSvg
          .replace(/"({.*?})"/g, "$1")
          .replace(/viewBox="(.*?)"/g, 'viewBox="$1"')
          .replace(/className="(.*?)"/g, 'className="$1"');

        const reactComponent = `// This file is generated from the icons directory
import React from 'react'
import { SVGComponentProps, iconSize, iconColor } from './helpers'

export const ${componentName} = ({fontSize = 'default', color, htmlColor = 'currentColor', titleAccess, className, ...props}: SVGComponentProps) => {
    return (
        ${updatedSvg}
    )
};`;

        fs.writeFileSync(
          path.join(outputDirectory, `${componentName}.tsx`),
          reactComponent
        );

        log(`✅ Component created: ${componentName}.tsx`);
        const exportStatement = `export * from './${componentName}';\n`;
        if (fs.existsSync(indexFilePath)) {
          try {
            fs.appendFileSync(indexFilePath, exportStatement, "utf8");
          } catch (e) {
            log("------", e);
          }
        } else {
          try {
            fs.writeFileSync(indexFilePath, exportStatement, "utf8");
          } catch (e) {
            log("------", e);
          }
          console.log(`Created and wrote to ${indexFilePath}`);
        }
      }
    }
  });
});
