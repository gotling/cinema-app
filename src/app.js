export class App {
  constructor() {
    this.message = 'Cinema App';
  }

  configureRouter(config, router) {
    // NO MORE HASH!
    config.options.pushState = true;
    config.options.root = '/';
    config.options.hashChange = false;

    config.map([
        {route: [''], name: 'home', moduleId: 'cinema', nav: true, title: 'Cinema'},
    ]);
    this.router = router;
  }
}
