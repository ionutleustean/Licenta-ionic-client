import {Page, NavController,NavParams, NgFor} from 'ionic/ionic';
import {Parse} from 'parse';


@Page({
  templateUrl: 'build/pages/order/menu/menu.html',
})
export class Menu {

  constructor(nav:NavController, navParams:NavParams) {
    this.nav = nav;
    this.restaurantId = navParams.get("restaurantId");
    this.tableNr = navParams.get("tableNr");


    menu = this.getMenu();
  }

  getMenu() {
    var Menu = Parse.Object.extend("Product");
    var query = new Parse.Query(Menu);
    console.log(this.restaurantId);
    query.equalTo("Restaurant", this.restaurantId);

    var res = this;
    query.find({
      success: function (results) {
        //alert("Successfully retrieved " + results.length + " scores.");
        //// Do something with the returned Parse.Object values
        var menu = [];
        //var color = ["#673bb7", "#dc4437", "#fe5722", "#e67e22", "#4385f5", "#009788"];

        for (var i = 0; i < results.length; i++) {
          var object = {
            'Id': results[i].id,
            'name': results[i].get('Name'),
            'shortDescription': results[i].get('ShortDescription'),
            'image': "img/menu/"+results[i].get('Image'),
          };

          menu.push(object);
          console.log(menu);
        }
        res.menu = menu;

      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }


  //goToOtherPage() {
  //  this.nav.push(Page1);
  //}
  //
}
