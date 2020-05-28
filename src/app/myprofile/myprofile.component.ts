import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface DialogData {
  date: string;
  complain: string;
}
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MyprofileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}



  ngOnInit() {
  }

}
