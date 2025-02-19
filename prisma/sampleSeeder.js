const prisma = require(".");

let timestamp = new Date().toJSON();
let sampleData = [
    {
        name: "Bhupendra Madhu",
        age: 20,
        gender: 'Male',
        email: "bhupendra@mail.com",
        address: "in your eyes",
        about: "If I ever said that I'm never scared, just know I mean it!",
        created_at: timestamp
    }, {
        name: "Yash Madhu",
        age: 21,
        gender: 'Male',
        email: 'gigachad@myownserver.com',
        address: 'India!!',
        about: "Wake up to reality",
        created_at: timestamp
    }, {
        name: "Noah Shnaps",
        age: 19,
        gender: 'Male',
        email: "noah@gmail.com",
        address: "somewhere at 90's",
        about: "I'm a gay jew",
        created_at: timestamp
    }, {
        name: "Millie Bobby Brown",
        age: 20,
        gender: 'Female',
        email: 'brownbobbymillie@apple.com',
        address: "england",
        about: "The dirtier the better",
        created_at: timestamp
    }, {
        name: "Zendaya",
        age: 22,
        gender: 'Female',
        email: "ilovespidey@yahoo.com",
        address: "near leonardo's home",
        about: "Confused between spiderman and his fat friend!!",
        created_at: timestamp
    }, {
        name: "Ava Adams",
        age: 25,
        gender: 'Female',
        email: "avaadam@mail.co",
        address: "Some states in USA",
        about: "I was looking good in Catch me if you can!",
        created_at: timestamp
    }, {
        name: "Cameron Diaz",
        age: 27,
        gender: 'Female',
        email: "CameronDiaz@mail.com",
        address: "Los Angelas",
        about: "Beauty of America in 90's. Your elder brother have crush on me",
        created_at: timestamp
    },
];

async function seed() {
    try {
        await prisma.$connect();

        // Using for...of loop to properly handle asynchronous operations
        for (const sample of sampleData) {
            await prisma.sampCollection.create({
                data: sample,
            });
        }

        console.log("Seed completed successfully!");

    } catch (error) {
        console.error("Error during seeding:", error);

    } finally {
        await prisma.$disconnect();
    }
}

seed();


