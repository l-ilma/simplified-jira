export class User {
  username: string;
  avatar: string;

  constructor(username: string, avatar?: string) {
    this.username = username;
    this.avatar = avatar ?? 'assets/icons/avatar.png';
  }
}

export class UnassignedUser extends User {
  constructor() {
    super('Unassigned');
  }
}
