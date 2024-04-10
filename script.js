let response = await fetch('./data.json');
let parsedData = await response.json();

console.log(parsedData);