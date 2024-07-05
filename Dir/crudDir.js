
import fs from 'fs/promises'

fs.mkdir('files')
    .then(() => console.log('Directorio creado correctamente'))
    .catch((err) => console.log('Ocurrió un error a la hora de crear el directorio' + err))

fs.rmdir('files')
    .then(() => console.log('Directorio eliminado correctamente'))
    .catch((err) => console.log('Ocurrió un error a la hora de eliminar el directorio' + err))
