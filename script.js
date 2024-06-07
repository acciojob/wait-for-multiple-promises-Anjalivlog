//your JS code here. If required.
function createPromise() {
    return new Promise((resolve, reject) => {
        let time = Math.random() * (1.33 - 0.67) + 0.67; // This will give a random number between 1 and 3
        setTimeout(() => {
            resolve(time);
        }, time * 1000);
    });
}

let promises = [createPromise(), createPromise(), createPromise()];

Promise.all(promises).then((results) => {
    let tableBody = document.getElementById('output'); // Get the table body by its id
    tableBody.innerHTML = ''; // Clear the table

    // Iterate over the results
    for (let i = 0; i < results.length; i++) {
        // Create a new row and two cells
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');

        // Set the text of the cells
        cell1.innerText = 'Promise ' + (i + 1);
        cell2.innerText = results[i].toFixed(2); // round off to 2 decimal places

        // Add the cells to the row
        row.appendChild(cell1);
        row.appendChild(cell2);

        // Add the row to the table body
        tableBody.appendChild(row);
    }

    // Calculate the total time
    let total = results.reduce((a, b) => a + b, 0);

    // Add a row for the total
    let totalRow = document.createElement('tr');
    let totalCell1 = document.createElement('td');
    let totalCell2 = document.createElement('td');

    totalCell1.innerText = 'Total';
    totalCell2.innerText = total.toFixed(2); // round off to 2 decimal places

    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);

    tableBody.appendChild(totalRow);
});