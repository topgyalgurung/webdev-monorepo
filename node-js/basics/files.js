const fs = require('fs');

// const readStream = fs.createReadStream("./docs/blog3.txt")

//read file
fs.readFile("./docs/blog1.txt", (err,data) =>{
    if(err){
        console.log(err);
        // process.exit(1);
    }
    // console.log(data) // buffer
    console.log(data.toString())
})
console.log('last line') // output before readfile output

// write file 
const content = "Hello world. this will replace text in file"
fs.writeFile("./docs/blog1.txt", content, (err) => {
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("file was overwritten")
})

fs.writeFile('./docs/blog2.txt', 'hello again', () =>{
    console.log('file was written into new file (if no file exist')
})

// directories
if(!fs.existsSync('./assets')){ // if folder does not exist
    fs.mkdir('./assets',(err) => {
        if(err){
            console.log(err)
        }
        console.log('folder created ')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}

// deleting file 
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}