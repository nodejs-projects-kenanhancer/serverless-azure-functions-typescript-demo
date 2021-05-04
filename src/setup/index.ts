import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as azureStorage from "azure-storage";

const httpTrigger: AzureFunction = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    context.log("HTTP trigger function processed a request.");

    const tableService = azureStorage.createTableService(
        process.env["TableStorageConnection"]
    );

    const createTableIfNotExists = (tableName: string) =>
        new Promise((resolve, reject) => {
            tableService.createTableIfNotExists(tableName, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

    // set content type for all responses
    context.res!.headers["Content-Type"] = "application/json";

    if (req.method == "POST") {
        try {
            await createTableIfNotExists("TestTable");
        } catch (error) {
            console.log(error);
            context.res!.status = 400;
            context.res!.body = {
                message: "An error occurred.",
            };
        }
    } else if (req.method == "GET") {
    } else if (req.method == "PUT") {
    } else if (req.method == "DELETE") {
    } else {
        // request method does not match
        context.res!.status = 500;
    }
};

export default httpTrigger;