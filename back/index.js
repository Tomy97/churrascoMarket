import exrpess from 'express';

const app = exrpess();

app.listener(3000)
console.log('Server is running on port 3000');