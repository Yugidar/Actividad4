const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) return res.status(403).send('No se obtuvo el acceso');

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Token no válido');
        req.user = user;
        next();
    });
};

router.get('/productos', authenticateToken, (req, res) => {
    res.json({ message: 'Productos' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;


    const user = { username };


    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});


module.exports = router;
