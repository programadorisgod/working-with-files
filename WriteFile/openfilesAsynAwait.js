import fs from 'node:fs/promises'


const openFile = async () => {

    try {
        const fileHandle = await fs.open('data.txt')

        const buffer = Buffer.alloc(1024)

        const { bytesRead, buffer: readBuffer } = await fileHandle.read({ buffer, length: 1024, offset: 0, position: 0 })

        console.log(`Bytes leidos: ${bytesRead}`);
        console.log(`Buffer leido: ${readBuffer}`);

        await fileHandle.close()

    } catch (error) {
        console.log(error);
    }

}


openFile()