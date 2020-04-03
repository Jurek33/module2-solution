(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  let toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex)
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController(ShoppingListCheckOffService) {
  let alreadyBoughtList = this;
  alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBougthItems();
}

function ShoppingListCheckOffService() {
  let service = this;
  let toBuyItems =[ 
     { name: 'apples', quantity: 5 },
     { name: 'grapes', quantity: 2 },
     { name: 'oranges', quantity: 2 },
     { name: 'potatoes', quantity: 7 },
     { name: 'kiwi', quantity: 10 },
     { name: 'mango', quantity: 3 },
     ];
  let alreadyBoughtItems = [];

  service.buyItem = function(itemIndex) {
    let item = toBuyItems[itemIndex];
    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIndex,1);
    };

  service.getToBuyItems = function() {
    return toBuyItems;
    };

  service.getAlreadyBougthItems = function() {
    return alreadyBoughtItems;
    }
  };

}


)();