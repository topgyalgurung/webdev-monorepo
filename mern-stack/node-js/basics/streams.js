const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})
// const readStream = fs.createReadStream('./docs/blog3.txt')
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) =>{
//     console.log('--- new chunk ---')
//     console.log(chunk.toString())
// })

// if we use encoding utf8, no need to turn toString
// const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'})

readStream.on('data', (chunk) =>{
    console.log('--- new chunk ---')
    console.log(chunk);
    writeStream.write('\nNEW chunk \n');
    writeStream.write(chunk);
})

// piping 
// shorter way to write above
// Piping is often a shortcut when reading and streaming files
// especially if we don't need to configure many settings 
// Uncomment the code below to run it, comment out Steps 2 and 
readStream.pipe(writeStream);