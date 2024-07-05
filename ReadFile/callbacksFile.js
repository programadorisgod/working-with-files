import fs from 'node:fs'

const controller = new AbortController()
const signal = controller.signal

fs.readFile('../file.txt', { encoding: 'utf-8', flag: 'r', signal }, (err, data) => {
    if (err?.name === 'AbortError') {
        console.log('Operación de lectura abortada')
        return
    }

    if (err) {
        console.log('Ocurrió un error', err.message)
        return
    }

    console.log(data);



})

setTimeout(() => { controller.abort() }, 1000)



