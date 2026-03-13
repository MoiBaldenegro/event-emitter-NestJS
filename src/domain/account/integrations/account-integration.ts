import { Injectable } from '@nestjs/common';
import { AccountDTO } from 'src/data/dto/Account.dto';
import { ReadAccountRepository } from 'src/data/repositories/accounts/read-account-repository';
import { CreateAccountDTO } from 'src/shared/dto/account/createAccount.dto';

@Injectable()
export class AccountIntegration {
  constructor(private readonly readAccountRepository: ReadAccountRepository) {}

  async getAllAccounts() {
    const accounts = await this.readAccountRepository.getAll();
    return accounts;
  }

  async createAccount(body: CreateAccountDTO): Promise<AccountDTO> {
    const account = await this.readAccountRepository.createAccount(body);
    return account;
  }
}
