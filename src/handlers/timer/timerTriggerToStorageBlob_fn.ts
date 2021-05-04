import { AzureFunction, Context } from "@azure/functions";
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, timerObj: any): void {

    context.log('TypeScript Timer trigger timerTriggerToStorageBlob_fn function is triggered.');

    const timeStamp: string = new Date().toISOString();

    context.bindings.myOutputBlob = { PartitionKey: uuidv4(), RowKey: 'PERSONAL_DATA', "first_name": "Kenan", "last_name": "Hancer", "age": 37, "inserted": timeStamp };

    context.done();
};

export { handle };