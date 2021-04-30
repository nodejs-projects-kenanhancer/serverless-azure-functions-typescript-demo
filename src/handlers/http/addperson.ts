import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, req: HttpRequest): void {

    const name = req.query.name || (req.body && req.body.name) || (`${process.env.FIRST_NAME} ${process.env.LAST_NAME}`);

    context.bindings.personEntity = { PartitionKey: uuidv4(), RowKey: 'FirstName', Name: name };

    // context.bindings.personEntity = [];
    // context.bindings.personEntity.push({
    //     PartitionKey: "Test",
    //     RowKey: i.toString(),
    //     Name: "Name " + i
    // });

    context.done();
};

export { handle };
