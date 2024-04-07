document.addEventListener("DOMContentLoaded", function() {
    // Function to filter table rows based on search input
    function filterTable() {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("problemsTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");

            // Loop through all table cells in the current row
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break; // Break out of the inner loop if a match is found in any cell
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }

    // Attach an event listener to the search input to trigger the filter function on input
    document.getElementById("searchInput").addEventListener("input", filterTable);
});
