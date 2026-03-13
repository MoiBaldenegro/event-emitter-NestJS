export enum accountEvents {
  USER_CREATED = 'account:user_created',
}

export interface UserCreatedNotify {
  name: string;
  email: string;
  phone: string;
}
