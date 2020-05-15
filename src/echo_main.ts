import { EchoService } from "./echo_service.ts";

const service = new EchoService();
const input = Deno.args[0];
const output = service.echo(input);
console.log(output);