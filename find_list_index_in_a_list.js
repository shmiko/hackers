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
var firstIndex = null;
/* code goes here */
function find(list,sublist){
	console.log(list,sublist);
	//loop through sublist and check each element against first array
	//if we can match the sequence then the result will be the index in the first array for the first element of the sublist
		for (var j = 0; j < sublist.length; j++){
			tempString = sublist[j];
			console.log('tempString is ',tempString, ' count is ', j);
			//if the first element of the sublist exists and we have not yet set the cheksum
			if(list.indexOf(tempString)) {//&& (j > firstIndex || firstIndex == null){
				console.log("checking inside array loop -- position is ",list.indexOf(tempString), 'numCheck is', numCheck, ' and firstIndex is ', firstIndex);				
				if(firstIndex === null){
					firstIndex = list.indexOf(tempString);
					numCheck =+ 1;
				} else if(firstIndex != 0 && firstIndex > j){
					numCheck =+ 1;
				}
				console.log("true");
			} else {
				console.log("false");
			}
		}
		if(numCheck === sublist.length){
			return "end true";
		} else {
			//should return -1
			return list.indexOf(tempString);
		}
	//}
};


find(list1,list2);

find(list3,list4);

}());