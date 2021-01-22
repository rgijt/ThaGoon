import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariables } from 'src/app/global-variables';
import { MatDialog } from '@angular/material/dialog';
import { OptionsMenuComponent } from 'src/app/dialog/options-menu/options-menu.component';

@Component({
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public Time: string;
  public WordCount: number;

  constructor(private router: Router, private globalVariables: GlobalVariables, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Initialize important values for ingame use
    this.Time = this.globalVariables.GetTime();
    this.WordCount = this.globalVariables.GetWordCount();
  }

  Start() {
     this.router.navigate(['/ingame', 5])
  }

  OpenOptions() {
    const dialogOptions = this.dialog.open(OptionsMenuComponent);
    dialogOptions.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  CloseOptions() {
    this.dialog.closeAll();
  }

}
