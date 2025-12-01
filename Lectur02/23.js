const registrationDate = new Date('2023-01-15T10:30:00');

const options = { year: 'numeric', month: 'long', day: 'numeric',timeZone: `UTC` };

const formattedDate = registrationDate.toLocaleDateString('en-US', options);
console.log(`User registered on: ${formattedDate}`);