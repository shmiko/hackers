(function() {
  'use strict';

var fs = require("fs");
var path = require("path");
var buf = new Buffer(1024);
var list1 = [1, 2, 3];
var list2 = [3, 2];

var list3 = [1, 2, 3];
var list4 = [2, 3];

var tempString = null;
var numCheck = 0;
var firstIndex = 0;
/* code goes here */
function find(list,sublist){
	console.log(list,sublist);
	//for (var i = o; i < list.length; i++){
		for (var j = 0; j < sublist.length; j++){
			tempString = sublist[j];
			console.log('j is ',sublist[j]);

			if(list.indexOf(tempString)){
				console.log("true - position is ",list.indexOf(tempString));
				numCheck =+ 1;
				if(firstIndex === 0){
					firstIndex = list.indexOf(tempString);
				}
			} else {
				console.log("false");
			}
		}
		if(numCheck === sublist.length){
			return "true";
		} else {
			return list.indexOf(tempString);
		}
	//}
};


find(list1,list2);

find(list3,list4);

}());