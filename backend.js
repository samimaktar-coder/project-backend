const epxress = require('express');
const cors = require('cors');

const app = epxress();

app.use(cors());


let imageList = [
    {
        ID: '101',
        Picture: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
        Date_of_Picture: '15/02/2024',
        Descriptor: 'Tony Stark - 15/02/2024 - Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '102',
        Picture: 'https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '09/11/2023',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '103',
        Picture: 'https://images.unsplash.com/photo-1604480133435-25b86862d276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '15/01/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '104',
        Picture: 'https://images.unsplash.com/photo-1609899517237-77d357b047cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '15/01/2024',
        Descriptor: 'Tony Stark - 15/02/2024 - Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '105',
        Picture: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '15/02/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '106',
        Picture: 'https://images.unsplash.com/flagged/photo-1576579206905-df3aa87352b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '09/11/2023',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '107',
        Picture: 'https://images.unsplash.com/photo-1606335543586-137481155deb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '15/01/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '108',
        Picture: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '27/12/2023',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '109',
        Picture: 'https://images.unsplash.com/photo-1617085606353-75ba20310b8c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '03/01/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '110',
        Picture: 'https://plus.unsplash.com/premium_photo-1672046218033-2b624d63390f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '17/03/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
    {
        ID: '111',
        Picture: 'https://images.unsplash.com/photo-1634788699029-b26c89ed32b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        Date_of_Picture: '15/01/2024',
        Descriptor: 'Tony Stark - 15/02/2024 -Tony Stark Image',
        Comments: 'Looking fitter than last month but still more to go.'
    },
];

app.get('/images', (req, res) => {
    res.json(imageList);
});

apres
app.get('/clients', (req, res) => {
    const clients = ["Emily",
        "Jacob",
        "Isabella",
        "Michael",
        "Olivia",
        "Ethan",
        "Ava",
        "Alexander",
        "Sophia",
        "Daniel",
        "Madison",
        "William",
        "Chloe",
        "Matthew",
        "Mia",
        "James",
        "Abigail",
        "Benjamin",];
    res.json(clients);
});

app.listen(8888, () => console.log('Server listen on PORT 8888'));