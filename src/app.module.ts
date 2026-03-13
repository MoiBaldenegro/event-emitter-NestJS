import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './domain/auth/auth.module';
import { AccountModule } from './domain/account/account.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DataModule } from './data/data.module';
import { NotificationsModule } from './domain/notifications/notifications.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    AuthModule,
    AccountModule,
    DataModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
