const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

let sessionDetails = [
    {
        id: "1",
        dateAndTime: '30-Apr-2024 05:00:00',
        trainer: 'Test Trainer',
        postalCode: '739675',
        sessionTag: 'Booked',
        client: 'Ravi Vishnoi',
        refId: '4241932000002553411',
        exercises: {
            warmUp: [
                {
                    exercise: "Ankle mobilization",
                    sets: 3,
                    reps: 4,
                    weights: 67
                },
                {
                    exercise: "Back lunge with knee to chest",
                    sets: 2,
                    reps: 6,
                    weights: 57
                },
                {
                    exercise: "Barbell walking lunge",
                    sets: 1,
                    reps: 5,
                    weights: 65
                }
            ],
            mainWorkout: [
                {
                    exercise: "Archer push-up",
                    sets: 3,
                    reps: 4,
                    weights: 67
                },
                {
                    exercise: "Bodyweight Skull Crusher",
                    sets: 2,
                    reps: 6,
                    weights: 57
                },
                {
                    exercise: "Cable crunch",
                    sets: 1,
                    reps: 5,
                    weights: 65
                },
                {
                    exercise: "Calf Raises",
                    sets: 1,
                    reps: 5,
                    weights: 65
                },
                {
                    exercise: "Crab walk",
                    sets: 1,
                    reps: 5,
                    weights: 65
                }
            ],
            finisher: [
                {
                    exercise: "Banded Pull down",
                    sets: 5,
                    reps: 2,
                    weights: 60
                },
                {
                    exercise: "High Knees",
                    sets: 3,
                    reps: 1,
                    weights: 63
                }
            ]
        }

    },
    {
        id: "2",
        dateAndTime: '5-May-2024 03:30:00',
        trainer: 'Steve Roger',
        postalCode: '342275',
        sessionTag: 'Booked',
        client: 'Ravi Vishnoi',
        refId: '4241932000002553411',
        exercises: {
            warmUp: [
                {
                    exercise: "Jumping Jacks",
                    sets: 3,
                    reps: 15,
                    weights: 10
                }
            ],
            mainWorkout: [
                {
                    exercise: "Push-ups",
                    sets: 4,
                    reps: 10,
                    weights: 20
                },
                {
                    exercise: "Squats",
                    sets: 3,
                    reps: 12,
                    weights: 30
                },
                {
                    exercise: "Plank",
                    sets: 2,
                    reps: 45,
                    weights: 0
                },
                {
                    exercise: "Russian Twists",
                    sets: 2,
                    reps: 20,
                    weights: 8
                }
            ],
            finisher: []
        }
    },
    {
        id: "3",
        dateAndTime: '12-May-2024 01:45:00',
        trainer: 'Tony Stark',
        postalCode: '583733',
        sessionTag: 'Booked',
        client: 'Ravi Vishnoi',
        refId: '4241932000002553411',
        exercises: {
            warmUp: [],
            mainWorkout: [
                {
                    exercise: "Pull-ups",
                    sets: 3,
                    reps: 6,
                    weights: 0
                },
                {
                    exercise: "Plank",
                    sets: 2,
                    reps: 60,
                    weights: 0
                },
                {
                    exercise: "Bicep Curls",
                    sets: 3,
                    reps: 12,
                    weights: 15
                }
            ],
            finisher: [
                {
                    exercise: "Jump Rope",
                    sets: 3,
                    reps: 50,
                    weights: 0
                }
            ]
        }
    },
    {
        id: "4",
        dateAndTime: '25-Jun-2024 06:20:00',
        trainer: 'Clark Kent',
        postalCode: '342234',
        sessionTag: 'Booked',
        client: 'Ravi Vishnoi',
        refId: '4241932000002553411',
        exercises: {
            warmUp: [],
            mainWorkout: [
                {
                    exercise: "Squats",
                    sets: 4,
                    reps: 8,
                    weights: 40
                },
                {
                    exercise: "Plank",
                    sets: 2,
                    reps: 60,
                    weights: 0
                }
            ],
            finisher: []
        }
    },
];


app.get('/sessions', (req, res) => {
    res.json(sessionDetails);
});

app.get('/session-details/:id', (req, res) => {
    let id = req.params.id;
    let session = sessionDetails.filter(session => session.id === id);
    res.json(session[0]);
});


app.get('/clients', (req, res) => {
    let clients = ['Philip', 'Rahul', 'David', 'Gary', 'Sonam', 'Damini', 'Tom'];

    res.json(clients);
});

app.listen(8888, () => console.log('Server listen on PORT 8888'));