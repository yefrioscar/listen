import { ListenFrontPage } from './app.po';

describe('listen-front App', () => {
  let page: ListenFrontPage;

  beforeEach(() => {
    page = new ListenFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
