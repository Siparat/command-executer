export class FfmpegBuilder {
	private inputPath: string
	private options: Map<string, string> = new Map()
	private outputPath: string

	constructor() {
		this.options.set('-c:v', 'libx264')
	}

	input(path: string) {
		this.inputPath = path
		return this
	}

	resolution(width: number, height: number) {
		this.options.set('-s', `${width}x${height}`)
		return this
	}

	output(outputPath: string) {
		if (!this.inputPath) throw new Error('Не задан параметр input')
		const res: string[] = ['-i', this.inputPath]

		this.options.forEach((value, key) => {
			res.push(key)
			res.push(value)
		})

		res.push(outputPath)

		return res
	}
}