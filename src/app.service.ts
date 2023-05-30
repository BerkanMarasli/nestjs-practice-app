import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHibIsAwesome(): string {
    return 'HIB is awesome';
  }

  getStatusCodeFromRes(res: any): string {
    return res.statusCode;
  }
}
