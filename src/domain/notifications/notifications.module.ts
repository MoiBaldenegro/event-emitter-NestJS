import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
  providers: [NotificationsService],
})
export class NotificationsModule {}
