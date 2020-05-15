import { EchoFormatPrefix, EchoFormatSurfix } from "./echo_fmt/mod.ts";

/**
 * Echo Service
 */
export class EchoService {

    private _prefix: EchoFormatPrefix;

    private _surfix: EchoFormatSurfix;

    constructor() {
        this._prefix = new EchoFormatPrefix(">> ");
        this._surfix = new EchoFormatSurfix(" -- Powered by Deno 🦕");
    }

    public echo(input: string): string {
        input = this._prefix.format(input);
        input = this._surfix.format(input);
        return input;
    }

}