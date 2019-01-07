const PDFDocument = require('pdfkit');
var fs = require('fs');
// Create a document
const doc = new PDFDocument;

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc.fontSize(15)
   .text('New generated PDF.', 100, 100);

doc.moveTo(100,150);

doc.fontSize(18)

doc.font('Times-Roman')
   .text('When in Rome, do it like the Romans do!')
   .moveDown(0.5)

// Draw a triangle
doc.save()
   .moveTo(100, 150)
   .lineTo(100, 250)
   .lineTo(200, 250)
   .fill("#FF3300");

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc.scale(0.6)
   .translate(770, -380)
   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
   .fill('red', 'even-odd')
   .restore();

doc.moveTo(100,150);

// Finalize PDF file
doc.end();