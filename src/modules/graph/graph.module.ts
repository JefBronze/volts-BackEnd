import { Module } from '@nestjs/common';
import { GraphController } from './controllers/graph.controller';
import { InstallationsService } from './services/installations.service';
import { SharedModule } from '../../modules/shared/shared.module';
import { AccesstokensCreateService } from './services/access_tokens_create.service';
import { AccesstokensListService } from './services/access_tokens_list.service';
import { AccesstokensRevokeService } from './services/acess_token_revoke.service';
import { InfoService } from './services/info.service';
import { InstallationsDataDownloadService } from './services/installations_data_download.service';
import { InstallationsDiagnosticsService } from './services/installations_diagnostics.service';
import { InstallationsGPSService } from './services/installations_gps_download.service';
import { InstallationsStatsService } from './services/installations_stats.service';
import { InstallationsSystemOverviewService } from './services/installations_system_overview.service';
import { InstallationsTagsService } from './services/installations_tags.service';
import { LoginDemoService } from './services/login_demo.service';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { WidgetBatteryMonitorService } from './services/widget_battery_monitor.service';
import { WidgetBatteryRelayService } from './services/widget_battery_relay.service';
import { WidgetESSBatteryService } from './services/widget_ess_battery.service';
import { WidgetChargeRelayStateService } from './services/widget_charge_relay_state.service';
import { WidgetFuelCellService } from './services/widget_fuel_cell.service';
import { WidgetsGatewayRelayService } from './services/widget_gateway_relay.service';
import { WidgetsGatewayRelayTwoService } from './services/widget_gateway_relay_two.service';
import { WidgetVeBusStateService } from './services/widget_ve_bus_state.service';
import { WidgetVeBusWarningsService } from './services/widget_ve_bus_warnings.service';
import { WidgetsGPSService } from './services/widget_gps.service';
import { WidgetBatteryExeternalService } from './services/widgets_battery_external.service';
import { WidgetsInverterChargeWarningsService } from './services/widget_inverter_charge_warning.service';
import { WidgetsInverterChargerStateService } from './services/widget_inverter_charge_state.service';
import { WidgetsGraphService } from './services/widget_graph.service';
import { WidgetsHoursofACService } from './services/widget_hours_of_ac.service';
import { WidgetsInverterService } from './services/widget_inserver.service';
import { WidgetsSolarStateService } from './services/widget_solar_state.service';
import { WidgetsInputService } from './services/widget_input.service';

@Module({
  imports: [SharedModule],
  controllers: [GraphController],
  providers: [
    InstallationsService,
    AccesstokensCreateService,
    AccesstokensListService,
    AccesstokensRevokeService,
    InfoService,
    InstallationsDataDownloadService,
    InstallationsDiagnosticsService,
    InstallationsGPSService,
    InstallationsStatsService,
    InstallationsSystemOverviewService,
    InstallationsTagsService,
    LoginDemoService,
    LoginService,
    LogoutService,
    WidgetBatteryMonitorService,
    WidgetBatteryRelayService,
    WidgetBatteryExeternalService,
    WidgetESSBatteryService,
    WidgetChargeRelayStateService,
    WidgetFuelCellService,
    WidgetsGatewayRelayService,
    WidgetsGatewayRelayTwoService,
    WidgetVeBusStateService,
    WidgetVeBusWarningsService,
    WidgetsGPSService,
    WidgetsInverterChargeWarningsService,
    WidgetsInverterChargerStateService,
    WidgetsGraphService,
    WidgetsHoursofACService,
    InstallationsService,
    WidgetsInputService,
    AccesstokensCreateService,
    AccesstokensListService,
    InfoService,
    InstallationsSystemOverviewService,
    InstallationsDataDownloadService,
    InstallationsDiagnosticsService,
    InstallationsGPSService,
    InstallationsTagsService,
    LoginService,
    LoginService,
    LogoutService,
    WidgetBatteryMonitorService,
    WidgetBatteryExeternalService,
    WidgetBatteryRelayService,
    WidgetChargeRelayStateService,
    WidgetBatteryExeternalService,
    WidgetFuelCellService,
    WidgetsGatewayRelayService,
    WidgetsGatewayRelayTwoService,
    WidgetsGPSService,
    WidgetsGraphService,
    WidgetsHoursofACService,
    WidgetsInverterService,
    WidgetsInverterChargerStateService,
    WidgetsInverterChargeWarningsService,
    WidgetsSolarStateService,
    WidgetVeBusStateService,
    WidgetVeBusWarningsService,
  ],
})
export class GraphModule {}
