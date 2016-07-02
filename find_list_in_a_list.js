var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to truncate the file after 10 bytes");
   
   // Truncate the opened file.
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("File truncated successfully.");
      console.log("Going to read the same file"); 
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // Print only read bytes to avoid junk.
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // Close the opened file.
         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("File closed successfully.");
         });
      });
   });
});




/* code goes here */
function find(list,sublist){
	//console.log(list.length,sublist.length);
};

var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);

process.stdin.on('end', function(){
	__input_stdin_array = __input_stdin.split("\n");
	var res;
	var _list_size = parseInt(__input_stdin_array[__input_currentline].trim(),10);
	__input_currentline += 1;

	var _list_i,_list_item;
	var _list = null;
	for (_list_i = 0;_list_i < _list_size; _list_i++){
		var _list_item = __input_stdin_array[__input_currentline].trim();
		__input_currentline += 1;
		_list = _insert_node_into_singlylinkedlist(_list,_list_item);
	}

	var _sublist_size = parseInt(__input_stdin_array[__input_currentline].trim(),10);
	__input_currentline += 1;
	var _sublist_i,_sublist_item;
	var _sublist = null;

	for (_sublist_i = 0; _sublist_i < _sublist_size; _sublist_i++){
		var _sublist_item = __input_stdin_array[__input_currentline].trim();
		__input_currentline += 1;
		_sublist = _insert_node_into_singlylinkedlist(_sublist, _sublist_item);
	}
	res = fin(_list,_sublist);
	wstream.write(res+"\n");
	wstream.end();
})

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data){
	__input_stdin =+ data;
});

function LinkedListNode(node_value){
	this.val = node.value;
	this.next = null;
}

function _insert_node_into_singlylinkedlist(head,val){
	if(head == null){
		head = new LinkedListNode(val);
	}
	else {
		var end = head;
		while(end.next != null){
			end = end.next;
		}
		var node = new LinkedListNode(val);
		end.next = node;
	}
	return head;
}

console.log(Object.prototype.toString.call(program.args), program.args);
