import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = async function (context: Context): Promise<void> {

    context.log('Node.js Queue trigger function processed', context.bindings.myQueueItem);
    context.bindings.myOutputBlob = context.bindings.myInputBlob;
    context.done();
};

export { handle };
