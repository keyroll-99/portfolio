import { Injectable } from '@angular/core';
import {ConsoleAction} from "../models/console-action";

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  private history: ConsoleAction[] = [];

  constructor() { }

  runCommand(command: string): ConsoleAction[] {
    console.log(command)
    this.history.push({input: command, result: "result"});
    return this.history;
  }

}
