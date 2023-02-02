import { Controller, Get, Query } from '@nestjs/common';
import { InstallationsService } from '../services/installations.service';
import { LoginService } from '../services/login.service';
import { LogoutService } from '../services/logout.service';
import { Body, Post } from '@nestjs/common/decorators';
import { InfoService } from '../services/info.service';
import { InstallationsStatsService } from '../services/installations_stats.service';

@Controller('vrm')
export class GraphController {
  constructor(
    private readonly installationsService: InstallationsService,
    private readonly infoService: InfoService,
    private readonly instalationsStatsService: InstallationsStatsService,
    private readonly loginDemoService: LoginService,
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
  ) {}

  @Get('info')
  async getInfo() {
    return await this.infoService.execute();
  }

  @Get('installations')
  async installations(@Query('extended') extended: string) {
    return await this.installationsService.execute({
      extended: Number(extended),
    });
  }


  @Get('installation/stats')
  async instalationsStats(@Query('idSite') idSite: string,
  @Query('attributeCodes') attributeCodes: string,
  @Query('end') end: string,
  @Query('interval') interval: string,
  @Query('show_instance') show_instance: string,
  @Query('start') start: string,
  @Query('type') type: string) {
    return await this.instalationsStatsService.execute({ idSite, attributeCodes, end, interval, show_instance, start, type  });
  }

  @Post('logi-demo')
  async loginDemo() {
    return await this.loginDemoService.execute({});
  }

  @Post('login')
  async login(@Body() data: VRM.Login) {
    return await this.loginService.execute(data);
  }

  @Post('logout')
  async logout() {
    return await this.logoutService.execute();
  }

}
