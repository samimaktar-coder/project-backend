const epxress = require('express');
const cors = require('cors');

const app = epxress();

app.use(cors());


let imageList = [
    {
        url: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg',
        title: 'Charles gaudreult image',
        date: '15/02/2024'
    },
    {
        url: 'https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Walter lee image',
        date: '09/11/2023'
    },
    {
        url: 'https://images.unsplash.com/photo-1604480133435-25b86862d276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Tony Stark image',
        date: '15/01/2024'
    },
    {
        url: 'https://images.unsplash.com/photo-1609899517237-77d357b047cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kevin Peterson image',
        date: '15/01/2024'
    },
    {
        url: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Michael image',
        date: '15/02/2024'
    },
    {
        url: 'https://images.unsplash.com/flagged/photo-1576579206905-df3aa87352b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Walter lee image',
        date: '09/11/2023'
    },
    {
        url: 'https://images.unsplash.com/photo-1606335543586-137481155deb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Tony Stark image',
        date: '15/01/2024'
    },
    {
        url: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Oto Winkler image',
        date: '27/12/2023'
    },
    {
        url: 'https://images.unsplash.com/photo-1617085606353-75ba20310b8c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Mark Adriane image',
        date: '03/01/2024'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1672046218033-2b624d63390f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Jakob Owens image',
        date: '17/03/2024'
    },
    {
        url: 'https://images.unsplash.com/photo-1634788699029-b26c89ed32b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Rahul Sinha image',
        date: '15/01/2024'
    },
];

app.get('/images', (req, res) => {
    res.json(imageList);
});

app.listen(8888, () => console.log('Server listen on PORT 8888'));