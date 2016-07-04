
var p,m,l;
//p = pickup block or in this case an 1
//m = move to next position on x axis
//l = lower or in this case change element to be a 1
//array is x=10 and y=15
var cols = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], rows = [0,0,0,0,0,0,0,0,0,0];
var grid = [rows,cols];
function compute(instructions) {
	/*
		if command is p then pickup and move to position 0
		position will be filled by making the array element = 1, otherwise it will be 0
		cannot move further than x=10
		cannot go higher than y-15
	*/
	console.log('grid is ',grid);
	var instr = instructions.upperCase();
	for (var i = 0; i < instr.length; i++){
		if(instr[i] === 'P'){

		} else if (instr[i] === 'M'){
			
		} else if (instr[i] === 'L'){

		}
	}

}

console.log(compute('PMLPMMMLPMLPMML'));