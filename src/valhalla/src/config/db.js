const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/valhalle';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));