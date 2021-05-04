import { AzureFunction, Context } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, myQueueItem: any): void {

    const partitionKey: string = uuidv4();
    const rowKey: string = `FirstName_${partitionKey}`;

    context.log('Node.js queue trigger function processed work item', myQueueItem);
    context.bindings.personEntity = { PartitionKey: partitionKey, RowKey: rowKey, Name: myQueueItem };
    context.done();
};

export { handle };
