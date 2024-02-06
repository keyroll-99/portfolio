import {Injectable} from '@angular/core';
import {ConsoleAction} from "../models/console-action";
import {BehaviorSubject} from "rxjs";
import {CommandType} from "../models/command-type";
import {Command} from "./Commands/command";
import {NotFoundCommand} from "./Commands/not-found-command";
import {ClearCommand} from "./Commands/clear-command";

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  private consoleHistory: BehaviorSubject<ConsoleAction[]> = new BehaviorSubject<ConsoleAction[]>([]);
  private commands: Command[] = [
    new NotFoundCommand(),
    new ClearCommand(this.consoleHistory)
  ];

  constructor() {
  }

  runCommand(command: string) {
    if (command === "") {
      return;
    }
    const result = this.executeCommand(command);

    this.consoleHistory.next([...this.consoleHistory.getValue(), {input: command, result: result}])
  }

  getConsoleHistory() {
    return this.consoleHistory.asObservable();
  }

  private executeCommand(command: string): string {
    const commandType = this.getCommandType(command);
    const commandToExecute = this.commands.find(command => command.baseCommand.toLowerCase() === commandType.toLowerCase());
    if (commandToExecute === undefined) {
      return this.executeCommand(CommandType.NotFound);
    }
    return commandToExecute.Execute(command);
  }

  private getCommandType(command: string) {
    const baseCommand = command.split(" ")[0];
    return Object.keys(CommandType).find(key => key.toLowerCase() === baseCommand.toLowerCase()) ?? CommandType.NotFound;
  }


}
