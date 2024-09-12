const calculateBmi = (height: number, weight: number):string => {
    let BMI = weight / ((height/100) ** 2)
    if (BMI < 18.5) {
        return 'underweight'
    } else if (BMI < 24.9) {
        return 'normal weight'
    } else if (BMI < 29.9) {
        return 'overweight'
    } else if (BMI >30) {
        return 'obese'
    }
}

console.log(calculateBmi(180,74))