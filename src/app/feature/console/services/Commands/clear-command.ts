import { CommandType } from "../../models/command-type";
import {Command} from "./command";
import {ConsoleAction} from "../../models/console-action";
import {BehaviorSubject} from "rxjs";

export class ClearCommand implements Command {
    baseCommand = CommandType.Clear;

    constructor(private consoleHistory: BehaviorSubject<ConsoleAction[]>) {
    }

    Execute(executeCommand: string): string[] {
        this.consoleHistory.next([]);
        return [];
    }
}
