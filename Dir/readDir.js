import fs from 'node:fs/promises'
fs.readdir('/home/camidev/Descargas', { encoding: 'utf-8', withFileTypes: true })
    .then((dirs) => {
        for (const dir of dirs) {
            console.log(dir.name);
            console.log(`Is file: ${dir.isFile()}`);
            console.log(`Is Directory: ${dir.isDirectory()}`);

        }
    })
    .catch(err => console.log(`Ocurrió un error ${err}`))
fs.watch()

const controller = new AbortController()
const { signal } = controller;
// setTimeout(() => { controller.abort() }, 1000);

(async () => {

    fs.access('../WriteFile/data.txt').then(() => console.log('Existe'))
        .catch(err => console.log(err))
    try {
        const watcher = fs.watch(`../WriteFile/data.txt`, { signal })
        for await (const event of watcher) {

            console.log(`Se modificó: ${event.filename} ${event.eventType}`);
        }
    } catch (error) {
        if (error?.name === 'AbortError') {
            console.log('Operación  abortada')
        } else {
            console.log('Ocurrió un error', error.message)
        }

    }
})()