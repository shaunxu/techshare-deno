export class EchoFormatSurfix {

    private _surfix: string;

    constructor(surfix: string) {
        this._surfix = surfix;
    }

    public format(input: string): string {
        return `${input}${this._surfix}`;
    }

}