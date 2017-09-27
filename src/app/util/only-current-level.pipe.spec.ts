import { OnlyCurrentLevelPipe } from './only-current-level.pipe';

describe('OnlyCurrentLevelPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyCurrentLevelPipe();
    expect(pipe).toBeTruthy();
  });
});
