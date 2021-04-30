import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = async function (context: Context, message: any): Promise<void> {

    context.log('Node.js Queue trigger function processed', context.bindings.message);
    context.done();
};

export { handle };
