import { Component } from '@angular/core';
import { SbbDialog } from '@sbb-esta/angular/dialog';
import { DialogContentComponent, DialogInput } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent {

  constructor(private dialog: SbbDialog) {
    
  }

  openDialog() {
    const input: DialogInput = {
      name: 'Nils'
    };

    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '500px', 
      height: '400px',
      hasBackdrop: true,
      disableClose: true,
      data: input
    });

    dialogRef.afterClosed().subscribe(result => 
      console.log('after closed', result));
  }

}
