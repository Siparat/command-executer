import inquirer from "inquirer";
import { PromptTypes } from "./prompt.types";

export class PromptService {
	async input<T>(message: string, type: PromptTypes) {
		const { result } = await inquirer.prompt<{result: T}>([
			{
				message,
				type,
				name: 'result'
			}
		])

		return result
	}
}