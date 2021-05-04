import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, myQueueItem: any): void {

    context.log('Node.js queue trigger function processed work item', myQueueItem);

    const person = context.bindings.personEntities.find(item=> item.PartitionKey === myQueueItem);
    context.log('Person entity: ' + JSON.stringify(person));
    context.done();
};

export { handle };
