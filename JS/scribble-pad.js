// Select the necessary elements
const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearButton = document.querySelector('.clear-button');
const downloadButton = document.querySelector('.share');
const ctx = canvas.getContext('2d');
let writingMode = false;

// Function to handle when the pointer is pressed down
const handlePointerDown = (event) => {
    writingMode = true;
    ctx.beginPath();
    const [positionX, positionY] = getCursorPosition(event);
    ctx.moveTo(positionX, positionY);
};

// Function to handle when the pointer is released
const handlePointerUp = () => {
    writingMode = false;
};

// Function to handle pointer movement
const handlePointerMove = (event) => {
    if (!writingMode) return;
    const [positionX, positionY] = getCursorPosition(event);
    ctx.lineTo(positionX, positionY);
    ctx.stroke();
};

// Function to get cursor position relative to the canvas
const getCursorPosition = (event) => {
    const rect = event.target.getBoundingClientRect();
    const positionX = event.clientX - rect.left;
    const positionY = event.clientY - rect.top;
    return [positionX, positionY];
};

// Set up the drawing styles
ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const imageURL = canvas.toDataURL();
    const image = document.createElement('img');
    image.src = imageURL;
    image.height = canvas.height;
    image.width = canvas.width;
    image.style.display = 'block';
    form.appendChild(image);
    clearPad();
});

// Clear the canvas
const clearPad = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Clear button functionality
clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearPad();
});

// Add event listeners to the canvas
canvas.addEventListener('pointerdown', handlePointerDown, { passive: true });
canvas.addEventListener('pointerup', handlePointerUp, { passive: true });
canvas.addEventListener('pointermove', handlePointerMove, { passive: true });

// Add event listener to the share button
downloadButton.addEventListener('click', () => {
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    // Create a new PDF document
    window.jsPDF = window.jspdf.jsPDF;
    const pdf = new window.jsPDF();

    // Add the image to the PDF
    pdf.addImage(imgData, 'JPEG', 10, 10, canvas.width / 4, canvas.height / 4);

    // Save the PDF file
    pdf.save('prescription.pdf');
});
