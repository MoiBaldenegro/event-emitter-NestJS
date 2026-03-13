import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { accountCreatedPayload, accountEvents } from 'src/shared/types/events';

@Injectable()
export class NotificationsService {
  consatructor() {}

  @OnEvent(accountEvents.USER_CREATED)
  async sendNotification(payload: accountCreatedPayload) {
    const { name } = payload;
    // Here you would implement the logic to send a notification, for example, via email, SMS, etc.
    // This is just a placeholder to demonstrate the concept of notifications through event triggering.

    // Aquí se implementaría la lógica para enviar una notificación, por ejemplo, por correo electrónico, SMS, etc.
    // Esto es solo un marcador de posición para demostrar el concepto de notificaciones gracias a la ejecucion de eventos.
    console.log(
      `Gracias por tu registro. ${name.split(" ")[0]}, espero esta demo de eventos en nestJS te sirva de mucho dejame una estrellita, y te invito a seguirme en mis redes sientete libre de contactarme para cualquier duda.`,
    );
  }
}
