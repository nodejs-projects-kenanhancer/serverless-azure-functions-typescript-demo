import { AzureFunction, Context } from "@azure/functions";

const handle: AzureFunction = function (context: Context, timerObj: any): void {

    const timeStamp: string = new Date().toISOString();
    context.log('Timer2 trigger function ran!', timeStamp);
    context.done();
};

export { handle };