import { CommandType } from "../../models/command-type";
import {Command} from "./command";

export class CdCommand implements Command {
    baseCommand: CommandType = CommandType.Cd;
    Execute(executeCommand: string): string[] {
        return [`User does not have permission to execute command: ${executeCommand}`]
    }
}
