import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { accountEvents } from 'src/shared/types/events';

@Injectable()
export class NotificationsService {
  consatructor() {}

  @OnEvent(accountEvents.USER_CREATED)
  async sendNotification(notification: any) {
    // Here you would implement the logic to send a notification, for example, via email, SMS, etc.
    // This is just a placeholder to demonstrate the concept of notifications through event triggering.

    // Aquí se implementaría la lógica para enviar una notificación, por ejemplo, por correo electrónico, SMS, etc.
    // Esto es solo un marcador de posición para demostrar el concepto de notificaciones gracias a la ejecucion de eventos.
    console.log('Notification sent:', notification);
  }
}
