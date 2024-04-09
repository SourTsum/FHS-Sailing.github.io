document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs button");
    const questionTab = document.querySelector(".question");
    const explanationTab = document.querySelector(".explanation");
    const submitButton = document.querySelector(".submitButton");
    const answerLabels = document.querySelectorAll(".answers label");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("selected-tab"));
            this.classList.add("selected-tab");

            if (this.textContent === "Question") {
                questionTab.style.display = "block";
                explanationTab.style.display = "none";
            } else if (this.textContent === "Explanation") {
                questionTab.style.display = "none";
                explanationTab.style.display = "block";
            }
        });
    });

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if any radio button is checked
        const selectedOption = document.querySelector("input[name='answer']:checked");
        if (!selectedOption) {
            alert("Please select an answer.");
            return; // Prevent further execution if no answer is selected
        }

        // Disable the submit button programmatically
        submitButton.disabled = true;

        const allRadioInputs = document.querySelectorAll("input[type='radio']");
        allRadioInputs.forEach(input => {
            const label = input.parentElement;
            const isCorrect = label.classList.contains("correct-option");

            // Apply styles to the radio button's pseudo-elements using class names
            if (input.checked) {
                if (isCorrect) {
                    input.classList.add("correct-answer");
                } else {
                    input.classList.add("wrong-answer");
                }
            } else {
                if (isCorrect) {
                    input.classList.add("correct-answer");
                }
            }

            // Disable all radio inputs to prevent selecting other options after submission
            input.disabled = true;
        });

        // Trigger a click event on the explanation tab button
        const explanationTabButton = document.querySelector(".tabs button:nth-child(2)"); // Adjust the selector based on your HTML structure
        explanationTabButton.click();
    });







});
