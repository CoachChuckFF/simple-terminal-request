import * as readline from "readline";

// Yeah, this is it.
export const getSimpleTerminalResponse = (query: string) => {
    const line = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
  
    return new Promise<String>(resolve => line.question(query, ans => {
        line.close();
        resolve(ans);
    }))
}