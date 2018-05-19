import { TutoPage } from './app.po';

describe('tuto App', function() {
  let page: TutoPage;

  beforeEach(() => {
    page = new TutoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
