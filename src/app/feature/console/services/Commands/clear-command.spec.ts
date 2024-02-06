import { ClearCommand } from './clear-command';
import {ConsoleAction} from "../../models/console-action";
import {BehaviorSubject} from "rxjs";

describe('ClearCommand', () => {
  it('should create an instance', () => {
    expect(new ClearCommand(new BehaviorSubject<ConsoleAction[]>([]))).toBeTruthy();
  });
});
