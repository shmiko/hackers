
var p,m,l;
//p = pickup block or in this case an 1
//m = move to next position on x axis
//l = lower or in this case change element to be a 1
//array is x=1"0" and y=15
var cols = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], 
	rows = ["0","0","0","0","0","0","0","0","0","0"];
var grid = [rows,cols];
var aGrid = [];
var movesArray = [];
var c = 0;
function compute(instructions) {
	/*
		if command is p then pickup and move to position "0"
		position will be filled by making the array element = 1, otherwise it will be "0"
		cannot move further than x=1"0"
		cannot go higher than y-15
	*/
	console.log('agrid is ',aGrid);
	var instr = instructions.toUpperCase();
	console.log('instr is ',instr);

	for (var i = 0; i < instr.length; i++){
		movesArray.push(instr[i]);
		if(instr[i] === 'P'){
			rows[0] = "0";
		} else if (instr[i] === 'M'){
			rows[i] = "0";
		} else if (instr[i] === 'L'){
			cols[c] = "0";
		}
		aGrid.push(rows);
		c+=1;
	}
	return aGrid;
	//.toString(16) for hex convert

}

console.log(compute('PMLPMMMLPMLPMML'));