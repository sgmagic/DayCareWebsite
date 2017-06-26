import { TinyWingsPage } from './app.po';

describe('TinyWings App', () => {
  let page: TinyWingsPage;

  beforeEach(() => {
    page = new TinyWingsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
