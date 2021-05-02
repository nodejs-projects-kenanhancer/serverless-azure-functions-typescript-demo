import { AzureFunction, Context } from "@azure/functions";

const handle: AzureFunction = function (context: Context, timerObj: any): void {

    context.log('TypeScript Timer trigger timerTriggerToStorageQueue_fn function is triggered.');

    const timeStamp: string = new Date().toISOString();

    context.bindings.message = `timerTriggerToStorageQueue_fn trigger function ran! ${timeStamp}`;

    context.done();
};

export { handle };