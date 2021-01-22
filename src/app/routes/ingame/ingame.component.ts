import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariables } from 'src/app/global-variables';

@Component({
  templateUrl: './ingame.component.html',
  styleUrls: ['./ingame.component.css']
})
export class IngameComponent implements OnInit {
  public Word: string;
  public Stopwatch: string = '00 : 00 : 00';
  public WordCounter: number = 0;

  private onPause: boolean;
  private stopwatchInterval;
  private changeWordInterval;
  private wordCounter: number;
  private skipSec: number;
  private lastSelectedWordIndex: number;

  private minutes: number = 0;
  private seconds: number = 0;
  private milliseconds: number = 0;
  

  private words = [
    'Chain', 
    'Brain',
    'Train',
    'Trees',
    'Bush',
    'Kush',
    'Haze',
    'Cheddar'
  ];

  constructor(private router: Router, private route: ActivatedRoute, private globalVariables: GlobalVariables) { }

  ngOnInit(): void {
    // Setting default variables to start
    this.onPause = false;
    this.wordCounter = 0;
    this.lastSelectedWordIndex = 0;
    this.skipSec = parseInt(this.route.snapshot.paramMap?.get('skipSec'));
    
    this.start();
  }

  private start() {
    // Get first word, start stopwatch and changeWord interval
    this.changeWord();
    this.startStopwatch();
    
    if(!isNaN(this.skipSec)) {
      this.changeWordInterval = setInterval(() => {
        this.changeWord();
      }, Number.parseInt(`${this.skipSec}000`));
    }

  }

  public Stop() {
    // Closing the loops off and changing the globals variables
    this.stopStopwatch();
    clearInterval(this.changeWordInterval);
    this.globalVariables.UpdateTimeWordCount(this.Stopwatch, this.wordCounter);
    this.router.navigate(['start']);
  }

  public SkipWord() {
    if(isNaN(this.skipSec)) {
      this.changeWord();
    }
  }

  private changeWord() {
    let wordIndex: number = 0;
    
    // To make sure you won't get the same word twice.
    while(wordIndex === this.lastSelectedWordIndex) {
      wordIndex = Math.floor(Math.random() * this.words.length);
    }

    this.wordCounter++;
    this.WordCounter = this.wordCounter;
    this.lastSelectedWordIndex = wordIndex;
    this.Word = this.words[wordIndex];
  }

  private updateStopwatch() {
    this.Stopwatch = ` ${this.minutes < 10 ? `0${this.minutes}` : this.minutes.toString()} : ${this.seconds < 10 ? `0${this.seconds}` : this.seconds.toString()} : ${this.milliseconds < 10 ? `0${this.milliseconds}` : this.milliseconds.toString()}`
  }

  private startStopwatch() {
    this.stopwatchInterval = setInterval(() => {
      if(this.milliseconds !== 59) {
        this.milliseconds++;
      } else {
        this.milliseconds = 0;

        if(this.seconds !== 59) {
          this.seconds++;
        } else {
          this.minutes++;
          this.seconds = 0;
        }
      }
      this.updateStopwatch();
    },1000)
  }

  stopStopwatch() {
    clearInterval(this.stopwatchInterval);
  }

}
