import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = function (context: Context, item: any): void {

    const { bindingData: {blobname, blobextension} } = context;

    context.log(`Received file: ${blobname}.${blobextension}`);

    context.done();
};

export { handle };
