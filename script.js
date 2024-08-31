function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;

    // Replace scientific functions with Math equivalents
    expression = expression
        .replace(/sqrt\(/g, 'Math.sqrt(')  // Square root
        .replace(/sin\(/g, 'Math.sin(')    // Sine
        .replace(/cos\(/g, 'Math.cos(')    // Cosine
        .replace(/tan\(/g, 'Math.tan(')    // Tangent
        .replace(/log\(/g, 'Math.log10(')  // Logarithm base 10
        .replace(/\^/g, '**');              // Exponentiation

    // Try to evaluate the expression safely
    try {
        // Use a Function constructor to evaluate the expression
        let result = new Function('return ' + expression)();
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    document.querySelector(".header").classList.toggle("dark-mode");

    // Toggle the icon between day and night
    let icon = document.getElementById("toggleMode");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});

document.getElementById("toggleSci").addEventListener("click", function() {
    document.querySelector(".sci-buttons").classList.toggle("hidden");
});
