import {Page, NavController} from 'ionic/ionic';
import {HomePage} from '../../homePage/homePage';
import {LogIn} from '../logIn/logIn';
import {Parse} from 'parse';

@Page({
  templateUrl: 'build/pages/user/register/register.html',
})
export class Register {

  constructor(nav:NavController) {
    this.nav = nav;
  }

  errorUserMesage = "";
  errorPasswordMesage = "";
  errorEmailMesage = "";


  //    Navigation


  goToHomePage() {
    this.nav.push(HomePage);
  }

  goToLogIn() {
    this.nav.push(LogIn);
  }

  //    User register
  register() {

    if (this.validateInput()) {

      var user = new Parse.User();
      user.set("username", this.username);
      user.set("password", this.firstPassword);
      user.set("email", this.email);

      // other fields can be set just like with Parse.Object
      // user.set("phone", "415-392-0202");

      user.signUp(null, {
        success: function (user) {
          // Hooray! Let them use the app now.
        },
        error: function (user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
    else {
      this.userNameChange();
      this.passwordChange(this.firstPassword);
      this.passwordChange(this.secondPassword);
      this.emailChange(this.email);
    }
  }

  validateInput() {
    return (this.validateUser() && this.validatePassword() && this.validateEmail());
  }

  validateUser() {
    return !(this.username == "" || this.username == " " || this.username == undefined || this.username == null);
  }

  validatePassword() {
    var passw = /^[A-Za-z]\w{8,19}$/; //orice cuvant care contine incuziv _, care contine 8-20 litere
    return ((this.firstPassword !== undefined ) && passw.test(this.firstPassword) && (this.firstPassword === this.secondPassword));
  }

  validateEmail() {
    var em = /\S+@\S+\.\S+/;
    return ((this.email !== undefined ) && this.email.match(em));
  }

  userNameChange() {
    if ((this.username == "" || this.username == " " || this.username == undefined || this.username == null)) {
      this.errorUserMesage = "The username field can not be empty";
    }
    else {
      this.errorUserMesage = "";
    }
  }

  passwordChange(passwordValue) {
    var passw = /^[A-Za-z]\w{8,19}$/; //orice cuvant care contine incuziv _, care contine 8-20 litere
    console.log(this.firstPassword + " " + this.secondPassword);

    if ((passwordValue == "" || passwordValue == " " || passwordValue == undefined || passwordValue == null)) {
      this.errorPasswordMesage = "The password field can not be empty";
    }
    else if (!passw.test(passwordValue)) {
      this.errorPasswordMesage = "The must have at least 8 caracters";
    }
    else if (this.firstPassword != this.secondPassword) {
      this.errorPasswordMesage = "The paswords are different";
    }
    else {
      this.errorPasswordMesage = "";
    }
  }

  emailChange(emailValue) {
    var em = /\S+@\S+\.\S+/;
    if ((emailValue == "" || emailValue == " " || emailValue == undefined || emailValue == null)) {
      this.errorEmailMesage = "The email field can not be empty"
    }
    else if (!emailValue.match(em)) {
      this.errorEmailMesage = "Enter a valit email address"
    }
    else {
      this.errorEmailMesage = "";
    }
  }
}



