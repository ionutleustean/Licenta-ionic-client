import {Page, NavController,NavParams, NgFor} from 'ionic/ionic';
import {Parse} from 'parse';

@Page({
  templateUrl: 'build/pages/order/tables/tables.html',
})
export class Tables {


  constructor(nav:NavController, navParams: NavParams) {
    this.nav = nav;
    this.restaurantId = navParams.get("restaurantId");
    console.log("a ", this.restaurantId);


    tables = this.getTables();
  }

  getTables(){
    var Tables = Parse.Object.extend("Tables");
    var query = new Parse.Query(Tables);
    console.log(this.restaurantId);
    query.equalTo("RestaurantId", this.restaurantId);

    var res = this;
    query.find({
      success: function (results) {
        //alert("Successfully retrieved " + results.length + " scores.");
        //// Do something with the returned Parse.Object values
        var tables = [];
        for (var i = 0; i < results.length; i+=2) {
          var object = [{
            'Id': results[i].id,
            'seats': results[i].get('Seats'),
            'tableNumber': results[i].get('TableNumber'),
          },{
            'Id': results[i+1] ? results[i+1].id : null,
            'seats': results[i+1] ? results[i+1].get('Seats') : null,
            'tableNumber': results[i+1] ? results[i+1].get('TableNumber') : null,

          }];

          tables.push(object);
        }
        res.tables = tables;

        console.log(tables);
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
