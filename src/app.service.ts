import { Injectable } from '@nestjs/common';
import { getDemoTemplate } from './shared/templates/demo-template';

@Injectable()
export class AppService {
  getThanksPage(): string {
    return getDemoTemplate();
  }
}
