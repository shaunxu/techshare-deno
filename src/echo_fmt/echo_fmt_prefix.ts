export class EchoFormatPrefix {

    private _prefix: string;

    constructor(prefix: string) {
        this._prefix = prefix;
    }

    public format(input: string): string {
        return `${this._prefix}${input}`;
    }

}