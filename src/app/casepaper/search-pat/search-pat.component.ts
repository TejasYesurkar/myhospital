import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import * as moment from 'moment/moment';
export interface DialogData {
  date: string;
  complain: string;
}

@Component({
  selector: 'app-search-pat',
  templateUrl: './search-pat.component.html',
  styleUrls: ['./search-pat.component.css']
})
export class SearchPatComponent implements OnInit {
  ngOnInit() {
    
  }

  constructor(
    public dialogRef: MatDialogRef<SearchPatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
