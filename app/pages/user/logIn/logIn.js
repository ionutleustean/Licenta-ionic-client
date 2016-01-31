import {Page, NavController} from 'ionic/ionic';
import {HomePage} from '../../homePage/homePage';
import {Register} from '../register/register';
import {Parse} from 'parse';


@Page({
  templateUrl: 'build/pages/user/logIn/logIn.html',
})
export class LogIn {
  constructor(nav:NavController) {
    this.nav = nav;
  }

  goToHomePage() {
    this.nav.push(HomePage);
  }

  goToRegister() {
    this.nav.push(Register);
  }

  logIn() {
    Parse.User.logIn(this.username, this.password, {
      success: function (user) {
        alert("success");
      },
      error: function (user, error) {
        // The login failed. Check error to see why.
      }
    });
  }


}
