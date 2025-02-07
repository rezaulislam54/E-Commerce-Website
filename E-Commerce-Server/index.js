const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middleware 
app.use(cors());
app.use(express.json());