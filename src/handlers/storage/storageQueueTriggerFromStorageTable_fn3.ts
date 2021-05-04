import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, myQueueItem: any): void {

    context.log('Node.js queue trigger function processed work item', myQueueItem);
    context.log('Person entity: ' + context.bindings.personEntity);
    context.done();
};

export { handle };
