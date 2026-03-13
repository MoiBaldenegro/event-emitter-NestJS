import { AccountDTO } from '../dto/Account.dto';

export class Account {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
  ) {}

  get(): AccountDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
    };
  }
}
