import { Injectable } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private createUsers(): IUser[] {
    return [
      { name: 'john' },
      { name: 'alice' },
      { name: 'mike' },
      { name: 'fabrice' },
      { name: 'melissa' },
      { name: 'jeane' },
      { name: 'marie' },
      { name: 'alain' },
      { name: 'alek' },
      { name: 'francis' },
      { name: 'sarah' },
      { name: 'marc' },
      { name: 'fabien' },
      { name: 'julie' },
      { name: 'roberto' },
    ];
  }

  private processUsers(users: IUser[]): void {
    // simulate heavy computation
    for (let i = 0; i < 10e4; i++) {
      for (let j = -10e3; j < 10e4; j++) {}
    }

    // capitalize names
    users.forEach(
      (user) =>
        (user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1))
    );
  }

  fetchUsers(): IUser[] {
    const users = this.createUsers();
    this.processUsers(users);
    return users;
  }
}
