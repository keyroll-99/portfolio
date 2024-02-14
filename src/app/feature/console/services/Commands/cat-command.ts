import {CommandType} from "../../models/command-type";
import {Command} from "./command";
import {File} from "../Files/file";

export class CatCommand implements Command {
    baseCommand: CommandType = CommandType.Cat;

    constructor(private files: File[]) {
    }


    Execute(executeCommand: string): string[] {
        const file = this.files.find(file => file.getName() === executeCommand.split(" ")[1]);
        if (file) {
            return file.getContent();
        }
        return ["File not found"];
    }
}
