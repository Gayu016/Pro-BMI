function calculateBMI() {
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Convert values to numbers
    age = Number(age);
    weight = Number(weight);
    height = Number(height);

    // Validation checks
    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "❌ Please enter valid values!";
        return;
    }

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    let genderMessage = gender === "male" ? "Mr." : "Ms.";

    document.getElementById("result").innerText = `Hello ${genderMessage}, aged ${age}, your BMI is ${bmi.toFixed(2)} (${category}).`;
}
  
