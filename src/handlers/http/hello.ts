import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const sayHello: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('JavaScript HTTP trigger function processed a request.');

  const name = (req.query.name || (req.body && req.body.name)) || (`${process.env.FIRST_NAME} ${process.env.LAST_NAME}`);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

  context.res = {
    status: 200, /* Defaults to 200 */
    body: responseMessage
  };
}

export { sayHello };