// Import the express module
import express from "express";

// Create an instance of the express application'
const app = express();

// Define the default port number
const PORT = 3002;

// Array to store contacts
const contacts = [];

// Use public
app.use(express.static("public"));

// Url Encoding
app.use(express.urlencoded({ extended: true }));

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/confirmation", (req, res) => {
	// Make a person object
	const person = {
		fname: req.body.fname,
		lname: req.body.lname,
		jtitle: req.body.jtitle,
		company: req.body.company,
		linkedin: req.body.linkedin,
		email: req.body.email,
		meet: req.body.meet,
		other: req.body.other,
		message: req.body.message,
		html: req.body.html,
		text: req.body.text,
	};

	// Push the person into the contacts array
	contacts.push(person);

	// Show the confirmation page
	res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get("/admin", (req, res) => {
	res.send(contacts);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
