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

  getUsers(): IUser[] {
    for (let i = 0; i < 10e9; i++) {} // simulate heavy computation
    return this.createUsers();
  }
}
