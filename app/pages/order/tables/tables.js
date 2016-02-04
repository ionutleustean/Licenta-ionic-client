import {Page, NavController,NavParams, NgFor} from 'ionic/ionic';
import {Parse} from 'parse';
import {Menu} from '../menu/menu'


@Page({
  templateUrl: 'build/pages/order/tables/tables.html',
})



export class Tables {


  constructor(nav:NavController, navParams: NavParams) {
    this.nav = nav;
    this.restaurantId = navParams.get("restaurantId");


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
        var color =["#673bb7","#dc4437","#fe5722","#e67e22","#4385f5","#009788"];

        for (var i = 0; i < results.length; i++) {
          var object = {
            'Id': results[i].id,
            'seats': results[i].get('Seats'),
            'tableNumber': results[i].get('TableNumber'),
            'color': color[Math.floor(Math.random() * color.length)]
          };

          tables.push(object);
        }
        res.tables = tables;

      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  goToMenu( tableNr ){
    this.nav.push(Menu, {
      restaurantId: this.restaurantId,
      tableNr: tableNr,
    });
  }



}
