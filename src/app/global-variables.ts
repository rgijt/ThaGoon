import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVariables {
    private time: string = '00 : 00 : 00';
    private wordCount: number = 0;

    public UpdateTimeWordCount(time: string, wordCount: number) {
        this.time = time;
        this.wordCount = wordCount;
    }

    public GetTime() {
        return this.time;
    }
    public GetWordCount() {
        return this.wordCount;
    }
}