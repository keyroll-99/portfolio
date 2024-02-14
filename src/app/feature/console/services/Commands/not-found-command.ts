import {Command} from "./command";
import {CommandType} from "../../models/command-type";

export class NotFoundCommand implements Command{
    baseCommand = CommandType.NotFound
    Execute(executeCommand: string): string[] {
      return [`Command '${executeCommand}' not found, try 'help' for more information.`]
    }
}
