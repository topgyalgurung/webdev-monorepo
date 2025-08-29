
// $ node showArgs.js hello there general kenobi
const argv = process.argv;

for (let i = 0; i < argv.length; i += 1) {
  console.log(i, argv[i]);
}

//  first [0] index is your Node.js version directory. 
// The second [1] is your current directory. 
// The rest are your custom arguments