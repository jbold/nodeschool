var total = 0;

for (var i = 0; i < process.argv.length; i++) {
	total = Number(process.argv[i]) + total
	
};
console.log(total);

/*Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
     var result = 0  
       
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i])  
       
     console.log(result)  */