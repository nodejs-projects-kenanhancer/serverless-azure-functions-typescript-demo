import { AzureFunction, Context } from "@azure/functions"

const printMessage: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();

    context.log(process.env.VARIABLE_FOO);

    if (myTimer.isPastDue) {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!', timeStamp);
};

export { printMessage };
