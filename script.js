
function calculateBMI(){
    const inputWeight = parseFloat(document.getElementById('weight').value);
    const inputHeight = parseFloat(document.getElementById('height').value);
    if(isNaN(inputWeight) || isNaN(inputHeight) || inputWeight <= 0 || inputHeight <= 0){
        document.getElementById('result').innerText = 'Please enter valid \nweight and height';
        return;
    }

    const bmi = inputWeight / Math.pow(inputHeight / 100, 2);
    let bmiStatus;
    if(bmi < 18.5){
            bmiStatus = 'Underweight';
        }else if(bmi >= 18.5 && bmi <= 24.9){
            bmiStatus = 'Normal Weight';
        }else if(bmi >=25 && bmi <= 29.9){
            bmiStatus = 'Overweight';
        }else{
            bmiStatus = 'Obesity';
        }
        const resultText = `Your BMI is \n${bmi.toFixed(2)}\nStatus \n${bmiStatus}`;
        const resultElement = document.getElementById('result');
        resultElement.innerText = resultText;
    }
    



