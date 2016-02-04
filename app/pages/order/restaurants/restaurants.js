import {Page, NavController, NgFor, NgSrc} from 'ionic/ionic';
import {Parse} from 'parse';
import {Tables} from '../tables/tables'

@Page({
  templateUrl: 'build/pages/order/restaurants/restaurants.html',
})
export class Restaurants {


  constructor(nav:NavController) {
    this.nav = nav;


    restaurants = this.getRestaurants();

  }


  getRestaurants(){
    var Restaurant = Parse.Object.extend("Restaurant");
    var query = new Parse.Query(Restaurant);
    var res = this;
    //query.equalTo("Name", "Shortdescription", "Address");
    query.find({
      success: function (results) {
        //alert("Successfully retrieved " + results.length + " scores.");
        //// Do something with the returned Parse.Object values
        var restaurants = [];
        for (var i = 0; i < results.length; i++) {
          var object = {
            'Id': results[i].id,
            'Name': results[i].get('Name'),
            'Shortdescription': results[i].get('Shortdescription'),
            'Address': results[i].get('Address'),
            'Logo': "img/restaurants/"+results[i].get('Image')
          };
          restaurants.push(object);
        }
        res.restaurants = restaurants;
      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  goToTables(restaurantId){
    this.nav.push(Tables, {
      restaurantId: restaurantId,
    });
  }



}
