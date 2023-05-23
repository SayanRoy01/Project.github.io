var rows = document.querySelectorAll('tbody tr');
rows.forEach(function (row) {
    var unitInputs = row.querySelectorAll('input[type="number"]');
    var totalCell = row.querySelector('td[id^="total"]');

    // Add event listener
    unitInputs.forEach(function (input) {
        input.addEventListener('input', calculateTotal);
    });

    function calculateTotal() {
        var total = 0;

        // Calculate the sum of row
        unitInputs.forEach(function (input) {
            var value = parseFloat(input.value);
            if (!isNaN(value)) {
                total += value;
            }
        });

        totalCell.textContent = total;

        calculateColumnSum();
    }
});

// Calculate the sum of the total
function calculateColumnSum() {
    var totalColumnSum = 0;
    var totalCells = document.querySelectorAll('td[id^="total"]');


    totalCells.forEach(function (cell) {
        var value = parseFloat(cell.textContent);
        if (!isNaN(value)) {
            totalColumnSum += value;
        }
    });

    // Display total sum
    var sumInput = document.getElementById("sumofall");
    sumInput.textContent = totalColumnSum;
}
console.log("Sayan Roy");
console.log("Electrical Engineer");
console.log("11901619018");