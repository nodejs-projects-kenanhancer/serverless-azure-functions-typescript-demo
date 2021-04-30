import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context): void {

    context.log('Node.js queue trigger function processed work item');
    context.done();
};

export { handle };
