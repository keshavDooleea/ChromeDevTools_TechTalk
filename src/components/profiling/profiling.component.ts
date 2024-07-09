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
  hasClickedOnFetch: boolean = false;

  constructor(private userService: UserService) {}

  fetchUsers(): void {
    this.hasClickedOnFetch = true;
    setTimeout(() => (this.users = this.userService.getUsers()));
  }
}
