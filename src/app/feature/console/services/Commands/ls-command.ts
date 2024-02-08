import { CommandType } from "../../models/command-type";
import {Command} from "./command";
import {File} from "../Files/file";

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
