// Import necessary modules
const mongoose = require('mongoose');
const PDFDocument = require('pdfkit');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true });

// Define a schema for our data
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model for our data
const User = mongoose.model('User', userSchema);

// Query for a specific user
User.findOne({ name: 'John Doe' }, function(err, user) {
    if (err) throw err;

    // Create a new PDF document
    const doc = new PDFDocument();

    // Set the font and font size
    doc.font('Helvetica-Bold').fontSize(20);

    // Add the user's name to the PDF
    doc.text(user.name);

    // Set the font and font size for the rest of the text
    doc.font('Helvetica').fontSize(12);

    // Add the user's email and age to the PDF
    doc.text(`Email: ${user.email}`);
    doc.text(`Age: ${user.age}`);

    // Stream the PDF to the user's browser
    doc.pipe(res);
    doc.end();
});
