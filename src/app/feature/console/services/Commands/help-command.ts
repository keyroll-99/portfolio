import { CommandType } from "../../models/command-type";
import {Command} from "./command";

export class HelpCommand implements Command {
    baseCommand: CommandType = CommandType.Help;
    Execute(executeCommand: string): string[] {
      return [
        "cat [file] - read file",
        "clear - clear console",
        "ls - list files",
        "help - show help message",
        "cd [directory] - change directory",
        "mkdir [directory] - create directory",
      ]
    }
}
