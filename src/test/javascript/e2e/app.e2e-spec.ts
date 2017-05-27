import {StacktoolPage} from './app.po';

describe('stacktool App', () => {
  let page: StacktoolPage;

  beforeEach(() => {
    page = new StacktoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
