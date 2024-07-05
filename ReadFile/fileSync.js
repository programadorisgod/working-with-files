import fs from 'node:fs'

console.log('Leyendo archivo');

const data = fs.readFileSync('file.txt', { encoding: 'utf8' })
console.log(data);

console.log('me ejecuto solo si la data se lee');

const data2 = fs.readFileSync('text.txt', { encoding: 'utf8' })
console.log(data2);
const stats = fs.statSync('file.txt')

console.log(
    stats.isFile(),
    stats.size,
    stats.isDirectory(),
    stats.isFIFO(),
    stats.isSocket(),
    stats.isSymbolicLink(),
    stats.atime,
    stats.mtime,
)

console.log(`Last modification: ${stats.mtime}`);
console.log(`Last Login: ${stats.atime}`);
