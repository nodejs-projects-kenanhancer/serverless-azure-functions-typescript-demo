import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, image): void {

    context.log('Node.js Queue trigger function processed', context.bindings.myQueueItem);
    context.bindings.imageSmall = context.bindings.image;
    context.done();
};

export { handle };
