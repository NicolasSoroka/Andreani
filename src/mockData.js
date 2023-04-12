import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' 📃 To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Tarjeta de prueba'
            },
            {
                id: uuidv4(),
                title: 'Dato mockeado'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Tarjeta de prueba'
            },
            {
                id: uuidv4(),
                title: 'Dato mockeado'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Challenge Andreani'
            }
        ]
    }
]

export default mockData