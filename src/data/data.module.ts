import { Module } from '@nestjs/common';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [],
  providers: [],
  exports: [RepositoriesModule],
})
export class DataModule {}
