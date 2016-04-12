//read a file
var fs = require('fs');
var rawText = fs.readFileSync(process.argv[2]);
//console.log(rawText);

//convert file to string
var buf = new Buffer(rawText);
var str = buf.toString();
//console.log(str);

//split with \n
var nuStr = str.split('\n');
//console.log(nuStr.length);

//count the number of new lines
var numNewLines = nuStr.length - 1;

//output to console
console.log(numNewLines);

/*
Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
     var fs = require('fs')  
       
     var contents = fs.readFileSync(process.argv[2])  
     var lines = contents.toString().split('\n').length - 1  
     console.log(lines)  
       
     // note you can avoid the .toString() by passing 'utf8' as the  
     // second argument to readFileSync, then you'll get a String!  
     //  
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
/*Notes: I could've chained all the methods together, didn't realize that
the buffer object was already created and passed to rawText.
also, passing in the utf8 param is a nice shortcut
*/

