const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');

const { STRING, DECIMAL } = Sequelize.DataTypes;
const db = new Sequelize('postgres://localhost/some_db');

const User = db.define('user', {
	name: STRING,
	age: DECIMAL,
	coolness: DECIMAL,
});

const syncAndSeed = async () => {
	try {
		await db.sync({ force: true });
		const users = [
			{ name: 'stanley', age: 3, coolness: 0 },
			{ name: 'prof', age: 20, coolness: 1000 },
			{ name: 'jason', age: 15, coolness: 100 },
		];

		await Promise.all(users.map((user) => User.create(user)));
	} catch (err) {
		console.log(err);
	}
};

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/api/users', async (req, res, next) => {
	res.send(await User.findAll());
});

const initialize = async () => {
	app.listen(3000);
	await syncAndSeed();
};

initialize();
