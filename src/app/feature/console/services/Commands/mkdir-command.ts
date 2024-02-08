import {CommandType} from "../../models/command-type";
import {Command} from "./command";

export class MkdirCommand implements Command{
    baseCommand = CommandType.Mkdir;
    Execute(executeCommand: string): string[] {
        return [`User does not have permission to execute command: ${executeCommand}`];
    }
}
