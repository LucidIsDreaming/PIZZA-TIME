// Import the express module
import express from 'express';

//Create and instance of an 
//express application
const app = express();

//Define a port number for
//our server to listen on 
const PORT = 3000;

//Define a default route ("/")
app.get('/', (req, res) => {

    res.send('Welcome to Poppa\'s Pizza');

});

//Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});