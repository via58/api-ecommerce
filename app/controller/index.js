const { userModel } = require("../dbconfig");

exports.getAllUsers = async (req, res) => {
    const user = await userModel.get();
    let allusers = [];
    user.forEach(doc => {
        const data = doc.data();

        // Convert Firestore timestamps to JS Date
        if (data.createdAt && data.createdAt._seconds) {
            data.createdAt = new Date(data.createdAt._seconds * 1000);
        }
        if (data.updatedAt && data.updatedAt._seconds) {
            data.updatedAt = new Date(data.updatedAt._seconds * 1000);
        }

        allusers.push(data);
    })
    return res.send(allusers);
}

exports.createNewUser = async (req, res) => {
    const { firstname, lastname, email, role } = req.body;
    if (firstname && lastname && email && role) {
        const requestBody = {
            firstname,
            lastname,
            email,
            role,
            updatedAt: new Date(),
            createdAt: new Date(),
            isActive: true
        }
        const fetchusers = await userModel.get();
        let existingusers = [];
        fetchusers.forEach(doc => {
            existingusers.push(doc.data())
        })
        const existingUserEmails = existingusers.map(x => x.email)
        if (existingUserEmails.includes(email)) {
            res.status(400).send({ error: "user already exist !" });
        }
        const newUser = await userModel.add(requestBody);
        return res.status(201).send(`User ${firstname} ${lastname} has been created`);
    } else {
        res.status(400).send({ error: "Requested user info not adequate !!" })
    }

}