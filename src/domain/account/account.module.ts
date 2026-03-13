import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { DataModule } from 'src/data/data.module';
import { AccountIntegration } from './integrations/account-integration';

@Module({
  imports: [DataModule],
  controllers: [AccountController],
  providers: [AccountService, AccountIntegration],
})
export class AccountModule {}
