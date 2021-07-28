import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { cloneDeep } from 'lodash';
import { UserService } from 'src/services/user/user.service';
import { UserData } from 'src/shared/definitions/common';
import { UpdatedUser } from 'src/shared/definitions/common';
import { ProfilEditionComponent } from './profil-edition/profil-edition.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userData;
  public updatedUser : UpdatedUser;

  constructor(
    private userService: UserService,
    private dialog: MatDialog
    ) {
      this.userData = userService.getUserData();
      this.updatedUser = {
        username : this.userData.username,
        newPassword : "",
        oldPassword : "",
        newPseudo :  ""
      };
     }

  ngOnInit(): void {
  }

      //To do get data User from user service

      //present the users data

      //put a button that calls a Modal (check Matthieu)

      //that Modal should open a new window that containss the profile edition component.

      openEditProfileDialog(userData: UserData) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true; // To put autofocus on first input field
        dialogConfig.data = this.updatedUser;
        const dialogRef = this.dialog.open(ProfilEditionComponent, dialogConfig);
        
        dialogRef.afterClosed().subscribe((data: UpdatedUser) => {
          if ((data !== undefined && data.newPseudo !=="") || (data !== undefined && data.oldPassword !=="")) {
            // Call service to update user
            this.updateProfile(data);
          } else {
            console.log("Hell no it didn't work")
          }
        });

      }

      updateProfile(updatedUser: UpdatedUser){
        this.userService.updateUser(updatedUser).then(() => {
          this.userData = this.userService.getUserData();
        })
      }
}
