interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;


}

interface ParsedArguments {
    target: number
    dailyExercise: number[]
}

const parseArguments = (args: string[]): ParsedArguments => {
    const numberList = [];
    if (args.length < 4) throw new Error('not enough arguments');
    if (isNaN(Number(args[2]))) throw new Error('target is invalid');
    for (let i = 3; i < args.length; i++) {
        if (isNaN(Number(args[i]))) throw new Error('Invalid input');
            numberList.push(Number(args[i]));
    }
    return {
        target: Number(args[2]),
        dailyExercise: numberList
    };
};

export const calculateExercises = (dailyExercise: number[], target: number): Result => {
    const average = dailyExercise.reduce((sum, value) => sum + value,0) /dailyExercise.length;
    return {
        periodLength: dailyExercise.length,
        trainingDays: dailyExercise.filter((hoursWorked) => hoursWorked > 0).length,
        success: average >= target,
        rating: 0,
        ratingDescription: 'You can always work more!!!',
        target: target,
        average: average
    };
};

    
    try {
        if (require.main === module) {
        const {target, dailyExercise} = parseArguments(process.argv);
        console.log(calculateExercises(dailyExercise, target));
    }
    } catch (error: unknown) {
        let errorMessage = 'Something went wrong. ';
        if (error instanceof Error) {
            errorMessage += 'Error: ' + error.message;
        }
        console.log(errorMessage);
    }