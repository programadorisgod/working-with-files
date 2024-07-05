import fs from 'node:fs/promises'

const controller = new AbortController()

const signal = controller.signal


fs.readFile('../file.txt', { encoding: 'utf-8', flag: 'r', signal })
    .then(data => console.log(data))
    .catch(err => {

        if (err.name === 'AbortError') return

        console.log('error:' + err);

    })



try {
    const data = await fs.readFile('../text.txt', { encoding: 'utf-8', flag: 'r', signal })
    console.log(data);
} catch (error) {
    if (error.name === 'AbortError') {
        console.log('OPeración de lectura abortada');
    } else {
        console.log('error:' + error);
    }
}   
