    var rows = document.querySelectorAll('tbody tr');
    rows.forEach(function (row) {
      var numberInputs = row.querySelectorAll('input[name="Number_of_Appliances"]');
      var powerInputs = row.querySelectorAll('input[name="Power_Rating_(Watts)"]');
      var dailyUseInputs = row.querySelectorAll('input[name="Daily_Use_in_Hours"]');
      var totalCell = row.querySelector('td[id^="total"]');

      numberInputs.forEach(function (input) {
        input.addEventListener('input', calculateTotal);
      });

      powerInputs.forEach(function (input) {
        input.addEventListener('input', calculateTotal);
      });

      dailyUseInputs.forEach(function (input) {
        input.addEventListener('input', calculateTotal);
      });

      function calculateTotal() {
        var total = 0;

        numberInputs.forEach(function (numberInput, index) {
          var number = parseFloat(numberInput.value);
          var power = parseFloat(powerInputs[index].value);
          var dailyUse = parseFloat(dailyUseInputs[index].value);
          if (!isNaN(number) && !isNaN(power) && !isNaN(dailyUse)) {
            var loadInHours = number * power * dailyUse;
            var unit = loadInHours / 1000;
            row.querySelector('input[name="Total_Load_in_hours"]').value = loadInHours;
            totalCell.textContent = unit;
          }
        });

        calculateColumnSum();
      }
    });

    function calculateColumnSum() {
      var totalColumnSum = 0;
      var totalCells = document.querySelectorAll('td[id^="total"]');

      totalCells.forEach(function (cell) {
        var value = parseFloat(cell.textContent);
        if (!isNaN(value)) {
          totalColumnSum += value;
        }
      });

      var sumInput = document.getElementById("sumofall");
      sumInput.textContent = totalColumnSum;
    }

    // Disable editing in the "Total Load in hours" input fields
    var totalLoadInputs = document.querySelectorAll('input[name="Total_Load_in_hours"]');
    totalLoadInputs.forEach(function (input) {
      input.disabled = true;
    });


    console.log("Sayan Roy");
    console.log("Electrical Engineer");
    console.log("11901619018");
