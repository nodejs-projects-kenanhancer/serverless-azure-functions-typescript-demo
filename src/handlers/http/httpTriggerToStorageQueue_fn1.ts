import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const handle: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('TypeScript HTTP trigger httpTriggerToStorageQueue_fn2 function processed a request.');

    const name: string = req.query?.name || req.body?.name;

    if (name) {
        // Add a message to the Storage queue,
        // which is the name passed to the function.
        context.bindings.message = name;

        context.res = {
            status: 200,
            body: `done`
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export { handle };
