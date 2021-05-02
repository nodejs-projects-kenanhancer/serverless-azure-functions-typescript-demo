import { AzureFunction, Context } from "@azure/functions"

const printMessage: AzureFunction = function (context: Context, myTimer: any): void {

    context.log('TypeScript Timer trigger timerTrigger_fn1 function is triggered.');

    const timeStamp: string = new Date().toISOString();

    context.log(process.env.VARIABLE_FOO);

    if (myTimer.isPastDue) {
        context.log('Timer1 function is running late!');
    }
    
    context.log('Timer1 trigger function ran!', timeStamp);
};

export { printMessage };
