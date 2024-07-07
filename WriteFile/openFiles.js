
import fs from 'node:fs/promises'
const info = ' sopa de macaco argentina '
const controller = new AbortController()
const signal = controller.signal

fs.appendFile('data.txt', info, 'utf-8')
    .then(() => console.log('Data añadida'))
    .catch((err) => console.log(`Se produjo un error ${err}`))


fs.open('../text.txt', 'r')
    .then((fd) => {

        const buffer = Buffer.alloc(1024)
        fd.read({ buffer, length: 1024, offset: 0, position: 0 })
            .then(data => {
                console.log(`Contenido leido: ${data.buffer.toString()}`)
                console.log(`Bytes leidos: ${data.bytesRead}`)

            })
        return fd.close()
            .then(console.log('archivo cerrado'))
            .catch(() => console.log('Ocurrio un error'))
    }).catch(() => console.log('Ocurrio un error'))


fs.writeFile('new2File.txt', info, { encoding: 'utf-8', signal })
    .then(() => console.log('Data insertada correctamente'))
    .catch((err) => console.log('Ocurrio un error' + err))
