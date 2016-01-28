import {Page, NavController} from 'ionic/ionic';
import {Page1} from '../page1/page1';
import {LogIn} from '../user/logIn/logIn';
import {Restaurants} from '../order/restaurants/restaurants';


@Page({
  templateUrl: 'build/pages/homePage/homePage.html',
})
export class HomePage {
  constructor(nav:NavController) {
    this.nav = nav;
  }

  goToOtherPage() {
    this.nav.push(Page1);
  }

  goToRestaurants() {
    this.nav.push(Restaurants);
  }

  goToLogIn() {
    this.nav.push(LogIn);
  }


}
