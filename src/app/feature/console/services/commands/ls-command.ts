import { CommandType } from "../../models/command-type";
import {File} from "../files/file";
import {Command} from "./command";

export class LsCommand implements Command {
    baseCommand: CommandType = CommandType.Ls;
    files: File[];

    constructor(files: File[]) {
      this.files = files;
    }

    Execute(executeCommand: string): string[] {
        return this.files.map(file => file.getMetrics());
    }
}
