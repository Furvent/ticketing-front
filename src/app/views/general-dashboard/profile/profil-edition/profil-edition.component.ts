import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatedUser } from 'src/shared/definitions/common';

@Component({
  selector: 'app-profil-edition',
  templateUrl: './profil-edition.component.html',
  styleUrls: ['./profil-edition.component.scss']
})
export class ProfilEditionComponent implements OnInit {
    data : UpdatedUser

  constructor(
    private dialogRef: MatDialogRef<ProfilEditionComponent>,
    @Inject(MAT_DIALOG_DATA) data: UpdatedUser
  ) { 
    this.data = data;

  }

  ngOnInit(): void {
  }

  //load the data 

    submit(){
      this.dialogRef.close(this.data);
    }

    goBack() {
      this.data.newPseudo = "";
      this.data.oldPassword = "";
      this.data.newPassword = "";
      this.dialogRef.close();
    }
}
