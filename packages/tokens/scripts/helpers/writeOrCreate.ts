import fs from 'fs'
import path from 'path'

type WriteOrCreateProps = {
	filePath: string
	templateString: string
}

export function writeOrCreate({
	filePath,
	templateString,
}: WriteOrCreateProps) {
	if (fs.existsSync(filePath)) {
		try {
			fs.writeFileSync(filePath, templateString)
		} catch (error) {
			console.error(`Error writing to file ${filePath}:`, error)
		}
		console.log('Append to file', filePath)
	} else {
		try {
			const directory = path.dirname(filePath)
			fs.mkdirSync(directory, { recursive: true })
			fs.writeFileSync(filePath, templateString)
		} catch (error) {
			console.error(`Error creating file ${filePath}:`, error)
		}
	}
	console.log('✅ Created and wrote to file', filePath)
}
