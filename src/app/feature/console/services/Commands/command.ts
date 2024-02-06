import {CommandType} from "../../models/command-type";

export interface Command {
  baseCommand: CommandType;
  Execute(executeCommand: string): string
}
