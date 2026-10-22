// Import the express module
import express from 'express';

//Create and instance of an 
//express application
const app = express();

//Define a port number for
//our server to listen on 
const PORT = 3000;

// Allow the app to parse data
// This is "middleware" that allows Express to read
// form submissions and store them in req.body
app.use(express.urlencoded({extended: true}));

//Create an array to store our orders in memory
//They will be lost when the server restarts
const orders =[];

//Enable static file serving
app.use(express.static('public'));


//Define a default route ("/")
app.get('/', (req, res) => {
    
    //res.send('Welcome to Poppa\'s Pizza');

    res.sendFile(`${import.meta.dirname}/views/home.html`);

});

// Add a contact route to display a contact page
app.get('/contact-us', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/contact.html`);
});

//Add an order confirmation route
app.get('/confirm-order', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

//menu route
app.get('/our-menu', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

//Add a route for the form submission
app.post('/submit-order', (req, res) => {

    //Create a JSON object to store the order data
    const order = req.body;
    order.timestamp = new Date();

    console.log(order);

       /* fname: req.body.fname,
        lname: req.body.lname,
        email:req.body.email,
        method:req.body.method,

        toppings: req.body.toppings,
        size: req.body.size,

        comment: req.body.comment,
        timestamp:newDate()
        */

    //add the order object to our orders array
    orders.push(order);
    console.log(orders);

    //Display the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);

    });

    //Add an admin route
    app.get('/admin', (req, res) => {
        res.send(orders);
    });




//Start the server on the designated PORT
app.listen(PORT, () => {

    console.log(`Server is running at 
        http://localhost:${PORT}`);

});
