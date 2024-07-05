
import fs from 'node:fs/promises'
const info = ' sopa de macaco argentina '
const controller = new AbortController()
const signal = controller.signal

fs.appendFile('data.txt', info, 'utf-8')
    .then(() => console.log('Data añadida'))
    .catch((err) => console.log(`Se produjo un error ${err}`))


fs.open('data.txt', 'r')
    .then((fd) => {
        console.log('fd');
        fd.close()
            .then(console.log('archivo cerrado'))
            .catch(() => console.log('Ocurrio un error'))
    }).catch(() => console.log('Ocurrio un error'))


fs.writeFile('newFile.txt', info, { encoding: 'utf-8', signal })
    .then(() => console.log('Data insertada correctamente'))
    .catch((err) => console.log('Ocurrio un error' + err))
