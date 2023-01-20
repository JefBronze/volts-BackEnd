import { Controller, Get, Query } from '@nestjs/common';
import { InstallationsService } from '../services/installations.service';
import { AccesstokensCreateService } from '../services/access_tokens_create.service';
import { AccesstokensListService } from '../services/access_tokens_list.service';
import { InstallationsDataDownloadService } from '../services/installations_data_download.service';
import { InstallationsDiagnosticsService } from '../services/installations_diagnostics.service';
import { InstallationsGPSService } from '../services/installations_gps_download.service';
import { InstallationsTagsService } from '../services/installations_tags.service';
import { LoginService } from '../services/login.service';
import { LogoutService } from '../services/logout.service';
import { WidgetBatteryMonitorService } from '../services/widget_battery_monitor.service';
import { WidgetBatteryExeternalService } from '../services/widgets_battery_external.service';
import { WidgetBatteryRelayService } from '../services/widget_battery_relay.service';
import { WidgetChargeRelayStateService } from '../services/widget_charge_relay_state.service';
import { WidgetFuelCellService } from '../services/widget_fuel_cell.service';
import { WidgetsGatewayRelayTwoService } from '../services/widget_gateway_relay_two.service';
import { WidgetsGatewayRelayService } from '../services/widget_gateway_relay.service';
import { WidgetsGPSService } from '../services/widget_gps.service';
import { WidgetsGraphService } from '../services/widget_graph.service';
import { WidgetsHoursofACService } from '../services/widget_hours_of_ac.service';
import { WidgetsInputService } from '../services/widget_input.service';
import { WidgetsInverterService } from '../services/widget_inserver.service';
import { WidgetsInverterChargerStateService } from '../services/widget_inverter_charge_state.service';
import { WidgetsInverterChargeWarningsService } from '../services/widget_inverter_charge_warning.service';
import { WidgetsSolarStateService } from '../services/widget_solar_state.service';
import { WidgetVeBusStateService } from '../services/widget_ve_bus_state.service';
import { WidgetVeBusWarningsService } from '../services/widget_ve_bus_warnings.service';
import { InstallationsSystemOverviewService } from '../services/installations_system_overview.service';
import { Body } from '@nestjs/common/decorators';
import { InfoService } from '../services/info.service';

@Controller('graph')
export class GraphController {
  constructor(
    private readonly installationsService: InstallationsService,
    private readonly accessTokensCreateService: AccesstokensCreateService,
    private readonly accessTokensListService: AccesstokensListService,
    private readonly infoService: InfoService,
    private readonly installationsSystemOverview: InstallationsSystemOverviewService,
    private readonly installationsDataDownloadService: InstallationsDataDownloadService,
    private readonly installationsDiagnosticsService: InstallationsDiagnosticsService,
    private readonly instalationsGpsDownloadService: InstallationsGPSService,
    private readonly instalationsStatsService: InstallationsTagsService,
    private readonly loginDemoService: LoginService,
    private readonly loginService: LoginService,
    private readonly logoutService: LogoutService,
    private readonly widgetBatteryMonitorService: WidgetBatteryMonitorService,
    private readonly widgetBatteryExternalService: WidgetBatteryExeternalService,
    private readonly widgetBateryRelayService: WidgetBatteryRelayService,
    private readonly widgetChargeRelayStateService: WidgetChargeRelayStateService,
    private readonly widgetESSBatteryService: WidgetBatteryExeternalService,
    private readonly widgetFuelCellService: WidgetFuelCellService,
    private readonly widgetGatewayRelayService: WidgetsGatewayRelayService,
    private readonly widgetGatewayRelayTwoService: WidgetsGatewayRelayTwoService,
    private readonly widgetGPSService: WidgetsGPSService,
    private readonly widgetGraphService: WidgetsGraphService,
    private readonly widgetHoursOfACService: WidgetsHoursofACService,
    private readonly widgetInputService: WidgetsInputService,
    private readonly widgetInverterService: WidgetsInverterService,
    private readonly widgetInverterChargeStateService: WidgetsInverterChargerStateService,
    private readonly widgetInverterChargeWarningService: WidgetsInverterChargeWarningsService,
    private readonly widgetSolarStateService: WidgetsSolarStateService,
    private readonly widgetVeBusStateService: WidgetVeBusStateService,
    private readonly widgetVeBusWarningsService: WidgetVeBusWarningsService,
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

  @Get('installations/system-overview')
  async getSystemOverview(@Query('idSite') idSite: string) {
    return await this.installationsSystemOverview.execute({
      idSite: Number(idSite),
    });
  }

  async installationsDataDownload(
    @Query('idSite') idSite: string,
    @Query('async') async: string,
    @Query('dataype') dataype: string,
    @Query('debug') debug: string,
    @Query('format') format: string,
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    return await this.installationsDataDownloadService.execute({
      idSite,
      async,
      dataype,
      debug,
      end,
      format,
      start,
    });
  }

  async installationsDiagnostics(
    @Query('idSite') idSite: string,
    @Query('count') count: string,
    @Query('page') page: string,
  ) {
    return await this.installationsDiagnosticsService.execute({
      idSite,
      count,
      page,
    });
  }

  async instalationsGpsDownload(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('start') start: string,
  ) {
    return await this.instalationsGpsDownloadService.execute({
      idSite,
      end,
      start,
    });
  }

  async instalationsStats(@Query('idSite') idSite: string) {
    return await this.instalationsStatsService.execute({ idSite });
  }

  async loginDemo() {
    return await this.loginDemoService.execute({});
  }

  async login(@Body() data: VRM.Login) {
    this.loginService.execute(data);
  }

  async logout(@Query('idSite') idSite: string) {
    return await this.logoutService.execute();
  }

  async getBatteryMonitor(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetBatteryMonitorService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getBatteryExterna(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetBatteryExternalService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getBateryRelay(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetBateryRelayService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getChargeRelayState(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetChargeRelayStateService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getESSBattery(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetESSBatteryService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getGuelCellService(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetFuelCellService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async gatewayRelay(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetGatewayRelayService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getGatewayRelayTwo(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetGatewayRelayTwoService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async widgetGPS(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetGPSService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getGraph(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetGraphService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async gethoursOfAC(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetHoursOfACService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getInput(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetInputService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getInverter(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetInverterService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async inverterChargeState(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetInverterChargeStateService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getInverterChargeWarning(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetInverterChargeWarningService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getSolarState(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetSolarStateService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getVeBusState(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetVeBusStateService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }

  async getVeBusWarnings(
    @Query('idSite') idSite: string,
    @Query('end') end: string,
    @Query('instance') instance: string,
    @Query('start') start: string,
  ) {
    return await this.widgetVeBusWarningsService.execute({
      idSite,
      end,
      instance,
      start,
    });
  }
}
