import { Module } from '@nestjs/common';
import { GraphController } from './controllers/graph.controller';
import { InstallationsService } from './services/installations.service';
import { SharedModule } from '../../modules/shared/shared.module';
import { InfoService } from './services/info.service';
import { LoginDemoService } from './services/login_demo.service';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { InstallationsStatsService } from './services/installations_stats.service';

@Module({
  imports: [SharedModule],
  controllers: [GraphController],
  providers: [
    InstallationsService,
    InstallationsStatsService,
    InfoService,
    LoginDemoService,
    InstallationsService,
    LoginService,
    LogoutService,
  ],
})
export class GraphModule {}
