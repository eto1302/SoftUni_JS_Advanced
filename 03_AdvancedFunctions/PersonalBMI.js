function CalculateBMI(name, age, weight, height){
    let bmi = Math.round(weight / (height /100 * height /100));
    let status;

    if(bmi < 18.5) status = 'underweight';
    else if(bmi < 25) status = 'normal';
    else if(bmi < 30) status = 'overweight';
    else status = 'obese';

    let result = {};
    result.name = name;
    result.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };
    result.BMI = bmi;
    result.status = status;
    if(status == 'obese') result.recommendation = 'admission required';
    return result;
}
console.log(CalculateBMI('Peter', 29, 75, 182))
console.log(CalculateBMI('Honey Boo Boo', 9, 57, 137))