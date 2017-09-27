import { AddSelfPipe } from './add-self.pipe';

describe('AddSelfPipe', () => {
  it('create an instance', () => {
    const pipe = new AddSelfPipe();
    expect(pipe).toBeTruthy();
  });
});
