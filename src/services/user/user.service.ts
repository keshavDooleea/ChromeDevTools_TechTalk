import { Injectable } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private createUsers(): IUser[] {
    return [
      { name: 'John' },
      { name: 'Alice' },
      { name: 'Mike' },
      { name: 'Fabrice' },
      { name: 'Melissa' },
      { name: 'Jeane' },
      { name: 'Marie' },
      { name: 'Alain' },
      { name: 'Alek' },
      { name: 'Francis' },
    ];
  }

  private processUsers(users: IUser[]): void {
    // simulate heavy computation
    for (let i = 0; i < 10e4; i++) {
      for (let j = 0; j < 10e4; j++) {}
    }
  }

  getUsers(): IUser[] {
    const users = this.createUsers();
    this.processUsers(users);
    return users;
  }
}
