import { Module } from '@nestjs/common';
import { ReadAccountRepository } from './accounts/read-account-repository';
import { WriteAccountRepository } from './accounts/write-account-repository';

@Module({
  providers: [ReadAccountRepository, WriteAccountRepository],
  exports: [ReadAccountRepository, WriteAccountRepository],
})
export class RepositoriesModule {}
