import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLogger } from './stream-logger.interface'

export class StreamHandler {
	constructor (private logger: IStreamLogger) {}

	processOut(stream: ChildProcessWithoutNullStreams) {
		stream.stdout.on('data', (data) => {
			this.logger.log(data)
		})

		stream.stderr.on('data', (data) => {
			this.logger.error(data)
		})

		stream.on('close', () => {
			this.logger.end()
		})
	}
}