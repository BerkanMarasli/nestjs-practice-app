import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/team5')
  getHibIsAwesome(): string {
    return this.appService.getHibIsAwesome();
  }

  @Get('/teapot')
  @HttpCode(418)
  get418(@Res({ passthrough: true }) res: any): string {
    return this.appService.getStatusCodeFromRes(res);
  }
}
