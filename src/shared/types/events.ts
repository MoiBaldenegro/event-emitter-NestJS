export enum accountEvents {
  USER_CREATED = 'account:user_created',
}

export interface accountCreatedPayload {
  name: string;
  email: string;
  phone: string;
}
