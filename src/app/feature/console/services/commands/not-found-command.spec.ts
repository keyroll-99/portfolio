import { NotFoundCommand } from './not-found-command';

describe('NotFoundCommand', () => {
  it('should create an instance', () => {
    const command = new NotFoundCommand();
    expect(command).toBeTruthy();
    expect(command.Execute("elo")).toBe("Command 'elo' not found");
  });
});
