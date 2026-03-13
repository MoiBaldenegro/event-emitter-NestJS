import { Injectable } from '@nestjs/common';
import { AccountDTO } from 'src/data/dto/Account.dto';
import { CreateAccountDTO } from 'src/shared/dto/account/createAccount.dto';
import { AccountIntegration } from './integrations/account-integration';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { accountEvents, UserCreatedNotify } from 'src/shared/types/events';

@Injectable()
export class AccountService {
  constructor(
    private readonly accountIntegration: AccountIntegration,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async getAll(): Promise<AccountDTO[]> {
    const response = await this.accountIntegration.getAllAccounts();
    return response;
  }

  async create(body: CreateAccountDTO): Promise<AccountDTO> {
    const response = await this.accountIntegration.createAccount(body);
    const { name, email, phone } = response;
    const payload: UserCreatedNotify = {
      name,
      email,
      phone,
    };
    this.eventEmitter.emit(accountEvents.USER_CREATED, payload);
    return response;
  }
}
