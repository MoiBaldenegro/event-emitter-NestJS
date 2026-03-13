import { ConflictException, Injectable } from '@nestjs/common';
import { AccountDTO } from 'src/data/dto/Account.dto';
import { Account } from 'src/data/entities/account';
import { CreateAccountDTO } from 'src/shared/dto/account/createAccount.dto';

@Injectable()
export class ReadAccountRepository {
  constructor() {}

  private accounts: Account[] = [];

  async getAll(): Promise<AccountDTO[]> {
    return this.accounts.map((account) => account.get());
  }

  // This method is not part of the ReadAccountRepository, but it's here to simulate account creation for testing purposes. In a real application, this would be handled by the WriteAccountRepository.

  // Este método no forma parte de ReadAccountRepository, sino que se incluye para simular la creación de cuentas con fines de prueba. En una aplicación real, esto se gestionaría mediante WriteAccountRepository.

  async createAccount(body: CreateAccountDTO): Promise<AccountDTO> {
    const existingEmail = this.accounts.some(
      (account) => account.email === body.email,
    );
    if (existingEmail) {
      throw new ConflictException('El correo ya está registrado.');
    }

    const existingPhone = this.accounts.some(
      (account) => account.phone === body.phone,
    );
    if (existingPhone) {
      throw new ConflictException('El teléfono ya está registrado.');
    }

    const id = crypto.randomUUID();
    const { name, email, phone } = body;
    const newUser = new Account(id, name, email, phone);
    this.accounts.push(newUser);
    return newUser.get();
  }
}
