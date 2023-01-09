import { PromptService } from "./core/prompt/prompt.service";

export class App {
	async run() {
		const promptService = new PromptService
		const res = await promptService.input<number>('Число', 'number')

		console.log(res)
	}
}

const app = new App()
app.run()