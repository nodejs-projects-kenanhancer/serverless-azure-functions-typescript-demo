import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, item): void {

    const { bindingData: {blobname} } = context;

    context.log(`Received file: ${blobname}\n`, item.toString('utf8'));

    context.done();
};

export { handle };
