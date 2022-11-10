
import { Component, Inject,OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ModalViewComponent } from '../modal-view/modal-view.component';
@Component({
  selector: 'app-modal-main',
  templateUrl: './modal-main.component.html',
  styleUrls: ['./modal-main.component.css'],
})
export class ModalMainComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '80%',
      height: ` ${window.innerHeight - (window.innerHeight*10)/100}px`,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

    });
  }
  ngOnInit(): void {}
}
