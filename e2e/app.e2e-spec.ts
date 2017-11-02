import { RecepiePage } from './app.po';

describe('recepie App', () => {
  let page: RecepiePage;

  beforeEach(() => {
    page = new RecepiePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
