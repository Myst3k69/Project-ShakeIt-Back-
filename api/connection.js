const mongoose = require('mongoose');


//Connect with DB
mongoose.connect('mongodb+srv://p2:p2mdp@cluster0.vf2je.mongodb.net/shakeit?retryWrites=true&w=majority', { useNewUrlParser: true },{ useUnifiedTopology: true })

mongoose.connection.once('open', () => console.log("Connection success")).on('error', (error) => console.log("error is :",error))

module