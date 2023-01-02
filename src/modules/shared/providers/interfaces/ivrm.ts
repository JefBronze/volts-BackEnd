export interface IVRM {
  login(data: VRM.Login): Promise<VRM.LoginResponse>;
  loginDemo(): Promise<VRM.LoginDemoResponse>;
  logout(): Promise<VRM.LogoutResponse>;
  userInstallations(
    extended: number,
  ): Promise<VRM.UserinstallationsResponse>;
  userAccesstokensCreate(
    idUser: string,
    data: VRM.AccessTokenCreate,
  ): Promise<VRM.AccessTokenResponse>;
  userAccesstokensList(idUser: string): Promise<VRM.AccessTokenListResponse>;
  userAccesstokensRevoke(
    idAccessToken: string,
    idUser: string,
  ): Promise<VRM.AccessTokenRevoke>;
  installationsSystemOverview(
    idSite: string,
  ): Promise<VRM.SystemOverview.Response>;
  installationsDiagnostics(
    idSite: string,
    count: number,
    page: number,
  ): Promise<VRM.Diagnostics.Response>;
  installationsGPSDownload(
    idSite: string,
    end: number,
    start: number,
  ): Promise<void>;
  installationsTags(idSite: string): Promise<VRM.TagsResponse>;
  installationsDataDownload(
    idSite: string,
    async: boolean,
    dataype: string,
    debug: boolean,
    end: number,
    format: string,
    start: number,
  ): Promise<VRM.DataDownloadResponse>;
  installationsStats(
    idSite: string,
    attributeCodes: string,
    end: number,
    interval: string,
    show_instance: boolean,
    start: number,
    type: string,
  ): Promise<VRM.Stats.Response>;
  installationsOverallstats(
    idSite: string,
    attributeCodes: string,
    type: string,
  ): Promise<VRM.OverallStats.Response>;
  widgetsGraph(
    idSite: string,
    attributeCodes: string,
    attributeIds: string,
    end: number,
    instance: number,
    pointsPerPixel: number,
    roundedEnd: number,
    roundedStart: number,
    start: number,
    useMinMax: number,
    width: number,
  ): Promise<VRM.GeneralWidgetsGraph.Response>;
  widgetsGPS(idSite: string, instance: number): Promise<VRM.WidgetGPS.Response>;
  widgetsHoursofAC(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetHoursOfAc.Response>;
  widgetsGenerator(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsInput(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsInverter(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsMPPT(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsCharge(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsESSBattery(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsFuelCell(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsBatteryExternal(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsBatteryRelay(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsBatteryMonitor(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsGatewayRelay(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsGatewayRelayTwo(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsChargeRelayState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsSolarState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsVeBusState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsVeBusWarnings(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsInverterChargerState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
  widgetsInverterChargeWarnings(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response>;
}
