import { Component } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  fetchUsers(): void {
    this.users = this.userService.getUsers();
  }
}
