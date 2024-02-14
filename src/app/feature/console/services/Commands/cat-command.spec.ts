import { CatCommand } from './cat-command';

describe('CatCommand', () => {
  it('should create an instance', () => {
    expect(new CatCommand([])).toBeTruthy();
  });
});
