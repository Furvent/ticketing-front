import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent {

  name: string;

  constructor(
    private dialogRef: MatDialogRef<CreateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.name = data.name;
  }

  save() {
    this.dialogRef.close(this.name);
  }

  close() {
    this.dialogRef.close();
  }
}
