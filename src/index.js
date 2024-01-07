import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/users', (req, res) => {
	const q = 'SELECT * FROM user';
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const q = 'SELECT * FROM user WHERE id = ?';

	db.query(q, [id], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post('/users', (req, res) => {
	const q = 'INSERT INTO user (`id`, `nickname`, `email`, `password`, `role_id`) VALUES (?)';
	const values = [null, req.body.nickname, req.body.email, req.body.password, req.body.role_id];
	db.query(q, [values], (err) => {
		if (err) return res.json(err);
		return res.json('User registred successfuly');
	});
});

app.delete('/users/:id', (req, res) => {
	const id = req.params.id;
	const q = 'DELETE FROM user WHERE id = ?';

	db.query(q, [id], (err) => {
		if (err) return res.json(err);
		return res.json('User deleted successfuly');
	});
});

app.put('/users/:id', (req, res) => {
	const id = req.params.id;
	const q = 'UPDATE user SET `nickname`= ?, `email`= ?, `password`= ?, `role_id`= ? WHERE id = ?';

	const values = [req.body.nickname, req.body.email, req.body.password, req.body.role_id];

	db.query(q, [...values, id], (err) => {
		if (err) return res.send(err);
		return res.json('Updated successfuly');
	});
});

app.listen(1000, () => {
  console.log('Server started at port: 1000. http://localhost:1000');
});
