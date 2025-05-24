const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const PORT=process.env.PORT

const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("DB connected"))
.catch((err)=>console.log(err,"DB not connected"))

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})