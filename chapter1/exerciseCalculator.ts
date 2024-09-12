interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;


}
const calculateExercises = (dailyExercise: number[], target: number): Result => {
    const average = dailyExercise.reduce((sum, value) => sum + value,0) /dailyExercise.length
    return {
        periodLength: dailyExercise.length,
        trainingDays: dailyExercise.filter((hoursWorked) => hoursWorked > 0).length,
        success: average > target,
        rating: 0,
        ratingDescription: 'You can always work more!!!',
        target: target,
        average: average
    }
}

    console.log(calculateExercises([2,4,5,0,1,0,0,0], 4))