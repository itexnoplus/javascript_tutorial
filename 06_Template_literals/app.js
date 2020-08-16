const name = 'Kamron';
const age = 20;
const job = 'Web developer';
const city = 'Xiva';
let html;

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
  </ul>
`;

document.body.innerHTML = html;