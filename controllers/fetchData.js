const prisma = require('../prisma');
// const bson = require('bson').ObjectID;
// let id = new bson();

const createData = (req, res) => {
    (async function () {
        let form = req.body;
        console.log(form);
        let timestamp = new Date().toJSON();
        await prisma.$connect();
        await prisma.sampCollection.create({
            data: {
                name: form.name,
                age: parseInt(form.age),
                gender: form.gender,
                email: form.email,
                address: form.address,
                about: form.about,
                created_at: timestamp
            }
        })
        res.json({ message: "Data Inserted Successfully" });

    })().then(async () => {
        await prisma.$disconnect()
    }).catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
};

const showData = (req, res) => {
    (async function () {
        await prisma.$connect();
        const main = await prisma.sampCollection.findMany();
        res.json({ resp: main });
    })().then(async () => {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.log(e)
        await prisma.$disconnect();
        process.exit(1);
    });
}

const updateData = (req, res) => {
    (async function () {
        let id = req.params.id,
            form = req.body;
        await prisma.$connect();
        const update = await prisma.sampCollection.update({
            where: {
                id: id
            }, data: {
                name: form.name,
                age: parseInt(form.age),
                gender: form.gender,
                email: form.email,
                address: form.address,
                about: form.about,
            }
        });
        res.json({
            message: `Data Updated at key ${id}`,
            data: update
        });
    })().then(async () => {
        await prisma.$disconnect();
    }).catch(async (err) => {
        console.log(err);
        await prisma.$disconnect();
        process.exit(1);
    });
};

const deleteData = (req, res) => {
    (async function () {
        let id = req.params.id;
        await prisma.$connect();
        await prisma.sampCollection.delete({
            where: {
                id: id
            }
        });
        res.json({
            message: `Data with key ${id} deleted successfully!!`
        });

    })().then(async () => {
        await prisma.$disconnect();

    }).catch(async (e) => {
        console.log(e)
        await prisma.$disconnect();
        process.exit(1);

    });

};

module.exports = {
    showData, createData, deleteData, updateData
}