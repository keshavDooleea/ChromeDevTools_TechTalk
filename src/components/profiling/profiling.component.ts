import { Component } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css'],
})
export class ProfilingComponent {
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  initUsers(): void {
    this.users = this.userService.fetchUsers();
  }

  clearUsers(): void {
    this.users = [];
  }
}
