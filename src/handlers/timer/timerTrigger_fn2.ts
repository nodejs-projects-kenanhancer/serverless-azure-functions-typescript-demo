import { AzureFunction, Context } from "@azure/functions";

const handle: AzureFunction = function (context: Context, timerObj: any): void {

    context.log('TypeScript Timer trigger timerTrigger_fn3 function is triggered.');

    const timeStamp: string = new Date().toISOString();
    context.log('Timer3 trigger function ran!', timeStamp);
    context.done();
};

export { handle };