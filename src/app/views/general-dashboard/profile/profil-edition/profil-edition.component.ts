import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatedUser } from 'src/shared/definitions/common';

@Component({
  selector: 'app-profil-edition',
  templateUrl: './profil-edition.component.html',
  styleUrls: ['./profil-edition.component.scss'],
})
export class ProfilEditionComponent implements OnInit {
  data: UpdatedUser;
  flagDisableSignIn = true;

  constructor(
    private dialogRef: MatDialogRef<ProfilEditionComponent>,
    @Inject(MAT_DIALOG_DATA) data: UpdatedUser
  ) {
    this.data = data;
  }

  ngOnInit(): void {}

  submit() {
    this.dialogRef.close(this.data);
  }

  goBack() {
    this.dialogRef.close();
  }

  onEnter() {
    this.flagDisableSignIn =
      this.data.newPseudo.trim() === '' &&
      (this.data.newPassword.trim() === '' ||
        this.data.oldPassword.trim() === '');
  }
}
