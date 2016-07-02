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
					console.log("firstIndex is null");
					firstIndex = list.indexOf(tempString);
					numCheck =+ 1;
					console.log("firstIndex is now ", firstIndex, 'and numCheck is now set as ', numCheck);
				} else if(firstIndex != null && list.indexOf(tempString) > firstIndex){
					console.log("firstIndex is not null ", firstIndex, 'and list.indexOf(tempString) > firstIndex ', list.indexOf(tempString) > firstIndex);
					numCheck =+ 1;
				}
				
			} else {
				numCheck =- 1;
				console.log("false - element of sublist doesn't exist in first list");
			}
		}
		var tempArrStr = "";
		tempArrStr = sublist.toString();
		if(list.indexOf(tempArrStr)){
			console.log("true -tostring works", list.indexOf(tempString),' tempArrStr is ', tempArrStr);
			return list.indexOf(tempString);
		}
		// if(numCheck == sublist.length){
		// 	console.log("true");
		// 	return firstIndex;
		// } 
		else {
			//should return -1
			return list.indexOf(tempString);
		}
	//}
};


find(list1,list2);

// find(list3,list4);

function find_csa(arr, subarr, from_index) {
    from_index |= 0;
    if (subarr.length === 0) {
        return from_index;
    }
    var haystack = "," + arr.slice(from_index).join(",") + ",",
        needle = "," + subarr.join(",") + ",",
        pos = haystack.indexOf(needle);
    if (pos > 0) {
        pos = haystack.substring(1, pos).split(",").length + from_index;
    }
    console.log(pos);
    return pos;
}
console.log("All tests should return true");
console.log(find_csa([1, 2, 3, 4, 5], [1, 2, 3]) === 0);
console.log(find_csa([1, 2, 3, 4, 5], [2, 3, 4]) === 1);
console.log(find_csa([1, 2, 3, 4, 5], [5]) === 4);
console.log(find_csa([1, 2, 3, 4, 5], [6]) === -1);
console.log(find_csa([1, 2, 3, 4, 5], [1, 3]) === -1);
console.log(find_csa([6, 6, 6, 7], [6, 6, 7]) === 1);
console.log(find_csa([1, 2, 3, 4, 5], []) === 0);
console.log(find_csa([3, 4, 3, 4, 3, 4], [3, 4, 3], 1) === 2);
console.log(find_csa([1, 2, 3, 4, 5], [], 1) === 1);



find_csa(list1,list2);


}());