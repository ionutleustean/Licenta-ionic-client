import {Page, NavController, NgFor} from 'ionic/ionic';
import {Parse} from 'parse';

@Page({
  templateUrl: 'build/pages/order/tables/tables.html',
})
export class Tables {


  constructor(nav:NavController) {
    this.nav = nav;

  }

  tables = this.getTables();

  getTables(){
    var Tables = Parse.Object.extend("Restaurant");
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
            'Name': results[i].get('Name'),
            'Shortdescription': results[i].get('Shortdescription'),
            'Address': results[i].get('Address')
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

  //goToTables(){
  //  this.nav.push(Tables);
  //}



}
