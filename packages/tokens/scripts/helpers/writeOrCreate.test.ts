// writeOrCreate.test.ts
import { writeOrCreate } from "./writeOrCreate";
import fs from "fs";
import path from "path";

jest.mock("fs");
jest.mock("path");

const mockFs = fs as jest.Mocked<typeof fs>;
const mockPath = path as jest.Mocked<typeof path>;

describe("writeOrCreate", () => {
  const filePath = "/some/dir/file.txt";
  const templateString = "Hello, world!";
  const directory = "/some/dir";

  beforeEach(() => {
    jest.clearAllMocks();
    mockPath.dirname.mockReturnValue(directory);
  });

  it("writes to existing file", () => {
    mockFs.existsSync.mockReturnValue(true);
    mockFs.writeFileSync.mockImplementation(() => {});

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    writeOrCreate({ filePath, templateString });

    expect(mockFs.existsSync).toHaveBeenCalledWith(filePath);
    expect(mockFs.writeFileSync).toHaveBeenCalledWith(filePath, templateString);
    expect(logSpy).toHaveBeenCalledWith("Append to file", filePath);
    expect(logSpy).toHaveBeenCalledWith(
      "✅ Created and wrote to file",
      filePath
    );
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it("handles error while writing to existing file", () => {
    mockFs.existsSync.mockReturnValue(true);
    mockFs.writeFileSync.mockImplementation(() => {
      throw new Error("write error");
    });

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    writeOrCreate({ filePath, templateString });

    expect(errorSpy).toHaveBeenCalledWith(
      `Error writing to file ${filePath}:`,
      expect.any(Error)
    );
    expect(logSpy).toHaveBeenCalledWith("Append to file", filePath);
    expect(logSpy).toHaveBeenCalledWith(
      "✅ Created and wrote to file",
      filePath
    );
  });

  it("creates new file and directory", () => {
    mockFs.existsSync.mockReturnValue(false);
    mockFs.mkdirSync.mockImplementation(() => directory);

    mockFs.writeFileSync.mockImplementation(() => {});

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    writeOrCreate({ filePath, templateString });

    expect(mockPath.dirname).toHaveBeenCalledWith(filePath);
    expect(mockFs.mkdirSync).toHaveBeenCalledWith(directory, {
      recursive: true,
    });
    expect(mockFs.writeFileSync).toHaveBeenCalledWith(filePath, templateString);
    expect(logSpy).toHaveBeenCalledWith(
      "✅ Created and wrote to file",
      filePath
    );
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it("handles error while creating file or directory", () => {
    mockFs.existsSync.mockReturnValue(false);
    mockFs.mkdirSync.mockImplementation(() => {
      throw new Error("mkdir error");
    });

    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    writeOrCreate({ filePath, templateString });

    expect(errorSpy).toHaveBeenCalledWith(
      `Error creating file ${filePath}:`,
      expect.any(Error)
    );
    expect(logSpy).toHaveBeenCalledWith(
      "✅ Created and wrote to file",
      filePath
    );
  });
});
