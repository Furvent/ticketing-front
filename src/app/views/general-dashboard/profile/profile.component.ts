import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GroupDashboardService } from 'src/services/group-dashboard/group-dashboard.service';
import { UserService } from 'src/services/user/user.service';
import { UserData } from 'src/shared/definitions/common';
import { UpdatedUser } from 'src/shared/definitions/common';
import { ProfilEditionComponent } from './profil-edition/profil-edition.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Output() refresh = new EventEmitter();
  public userData;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private groupService: GroupDashboardService
  ) {
    this.userData = userService.getUserData();
  }

  openEditProfileDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; // To put autofocus on first input field
    const updatedUser: UpdatedUser = {
      username: this.userData.username,
      newPassword: '',
      oldPassword: '',
      newPseudo: this.userData.pseudo,
    };
    dialogConfig.data = updatedUser;
    const dialogRef = this.dialog.open(ProfilEditionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: UpdatedUser) => {
      if (
        (data !== undefined && data.newPseudo !== '') ||
        (data !== undefined && data.oldPassword !== '')
      ) {
        // Call service to update user
        this.updateProfile(data);
      }
    });
  }

  updateProfile(updatedUser: UpdatedUser) {
    this.userService.updateUser(updatedUser).then(() => {
      this.userData = this.userService.getUserData();
    });
  }
}
