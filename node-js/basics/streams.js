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
readStream.pipe(writeStream);