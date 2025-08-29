// const fs = require('fs')
const fs = require('fs').promises;

// with callbacks (callback hell)
// if we want to read then write it, then take file we wrote and read it 
fs.readFile('myFile.txt', 'utf-8', function(err, data) {
    if(err){
        console.error(err);
        process.exit(1);
    }
    // console.log(`file contents: ${data}`);
    fs.writeFile('./files/output2.txt', data, 'utf-8', function(err){
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log("Successfully wrote to file");
        
        // fs.readFile() .. 
    })
})

// with promises 
async function readTextFileComplex(){
    try{
        const firstData = await fs.readFile('myFile.txt', 'utf-8');
        await fs.writeFile('.files/output2.txt', firstData, 'utf-8');
        const secondData = await fs.readFile('./files/output2.txt', 'utf-8');
        console.log('Second data: ', secondData);
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
readTextFileComplex();

// writeFile
const content = 'THIS WILL GO IN THE FILE'

async function handleWriteFile(){
    try{
        console.log("Writing file ...")
        await fs.writeFile('./files/output.txt', content, 'utf-8');
        console.log('file written successfully, we have access to file at this line')
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
handleWriteFile();