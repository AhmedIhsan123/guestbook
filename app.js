import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3002;

const contacts = [];

// Serve static files from "public"
app.use(express.static("public"));

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "views/home.html"));
});

// Handle form submission
app.post("/confirmation", (req, res) => {
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

	contacts.push(person);
	res.sendFile(path.join(__dirname, "views/confirmation.html"));
});

// Admin page to view all submissions
app.get("/admin", (req, res) => {
	res.json(contacts);
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
