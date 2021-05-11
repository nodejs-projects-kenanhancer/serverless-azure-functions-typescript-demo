import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, message): void {

    context.log('Node.js Queue trigger function processed', context.bindings.message);
    context.bindings.messageOut = context.bindings.message;
    context.done();
};

export { handle };
