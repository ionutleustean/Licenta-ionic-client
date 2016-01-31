import {App, Platform, Config} from 'ionic/ionic';
//import {TabsPage} from './pages/tabs/tabs';
import {HomePage} from './pages/homePage/homePage';
import {Parse} from 'parse';
import {enableProdMode} from 'angular2/core';
enableProdMode();

@App({
  templateUrl: 'build/app.html',
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}
})
export class MyApp {
  constructor(platform: Platform) {
    this.root = HomePage;
    Parse.initialize("CpBbLoGE6IIVBZWRhUl4uu24XrAn4iVXnp3SuxgE", "BVhHPBHrAoAIRIEoyx5v1lXnfbIkDIO5SYWfDHtj");
    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that the platform is ready
    });
  }
}
