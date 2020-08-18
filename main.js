var fs = require('fs');


function readPlain (){

const file  = fs.readFileSync("input.csv" ,"utf8" , (err) => {
    if(err) throw err;
  
});
const arrLines = file.split('\n');
const Header = arrLines[0].split(',');
arrLines.splice(0, 1);
const result = [];
arrLines.map((item1 , index1=2) => {       
    const x = item1.split(',');  
    var obj = {};
    x.map((item2 , index2)=>{        
        const m = Header[index2];
         obj[m] = item2 ;  
    })
    
    result.push(obj);
})
return result;

};

//Read File
// console.log(readPlain());


function saveToFile (arr){
   
        fs.writeFile('jsonfile.json',JSON.stringify(arr) ,  (err) => {
            if (err) throw err;
            console.log('Saved!');
          });
};

//save jsonFile
// saveToFile(readPlain());


function readJsonFile (){
  let file =   fs.readFileSync("jsonfile.json" , (err) => {
      if(err) {
        //   throw err;
          console.log('Error : '+err);
        }

  });
    let parseFile = JSON.parse(file);
    return parseFile; 
}

//read json file
console.log(readJsonFile());


