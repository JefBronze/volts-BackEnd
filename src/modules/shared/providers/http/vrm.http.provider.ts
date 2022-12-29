import { Injectable } from '@nestjs/common/decorators';
import { IVRM } from '../interfaces/ivrm';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { HttpResponseException } from 'core/http/HttpException';
import { VRMConstant } from 'modules/shared/constants/vrm';

@Injectable()
export class VRMHttpProvider implements IVRM {
  constructor(private readonly httpService: HttpService) {}

  async login(data: VRM.Login): Promise<VRM.LoginResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.LoginResponse }>(
        this.httpService.post(
          VRMConstant.BASE_URL + VRMConstant.AUTH_LOGIN,
          data,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async loginDemo(): Promise<VRM.LoginDemoResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.LoginDemoResponse }>(
        this.httpService.get(
          VRMConstant.BASE_URL + VRMConstant.AUTH_LOGIN_DEMO,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async logout(): Promise<VRM.LogoutResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.LogoutResponse }>(
        this.httpService.get(
          VRMConstant.BASE_URL + VRMConstant.AUTH_LOGIN_DEMO,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async userInstallations(
    idUser: string,
    extended: number,
  ): Promise<VRM.UserinstallationsResponse> {
    try {
      const response = await lastValueFrom<{
        data: VRM.UserinstallationsResponse;
      }>(
        this.httpService.get(
          VRMConstant.BASE_URL + VRMConstant.USERS + idUser + VRMConstant.USERS_INSTALLATIONS, {
            params: {
                extended
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async userAccesstokensCreate(
    idUser: string,
    data: VRM.AccessTokenCreate,
  ): Promise<VRM.AccessTokenResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.AccessTokenResponse }>(
        this.httpService.post(
          VRMConstant.BASE_URL + VRMConstant.USERS + idUser, data
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async userAccesstokensList(
    idUser: string,
  ): Promise<VRM.AccessTokenListResponse> {
    try {
      const response = await lastValueFrom<{
        data: VRM.AccessTokenListResponse;
      }>(
        this.httpService.get(
          VRMConstant.BASE_URL + VRMConstant.USERS + idUser + VRMConstant. ACCESS_TOKENS_LIST,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async userAccesstokensRevoke(
    idAccessToken: string,
    idUser: string,
  ): Promise<VRM.AccessTokenRevoke> {
    try {
      const response = await lastValueFrom<{ data: VRM.AccessTokenRevoke }>(
        this.httpService.get(
          VRMConstant.BASE_URL + VRMConstant.USERS + idUser + VRMConstant.ACCESS_TOKENS + idAccessToken,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsSystemOverview(
    idSite: string,
  ): Promise<VRM.SystemOverview.Response> {
    try {
      const response = await lastValueFrom<{
        data: VRM.SystemOverview.Response;
      }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.AUTH_LOGIN_DEMO,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsDiagnostics(
    idSite: string,
    count: number,
    page: number,
  ): Promise<VRM.Diagnostics.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.Diagnostics.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.DIAGNOSTIC, {
            params: {
                count,
                page
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsGPSDownload(
    idSite: string,
    end: number,
    start: number,
  ): Promise<void> {
    try {
      const response = await lastValueFrom<{ data: void }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.GPS_DOWLOADS, {
            params: {
                end,
                start
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsTags(idSite: string): Promise<VRM.TagsResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.TagsResponse }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.TAGS,
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsDataDownload(
    idSite: string,
    async: boolean,
    dataype: string,
    debug: boolean,
    end: number,
    format: string,
    start: number,
  ): Promise<VRM.DataDownloadResponse> {
    try {
      const response = await lastValueFrom<{ data: VRM.DataDownloadResponse }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.DATA_DOWNLOAD, {
            params: {
                async, 
                dataype,
                debug, 
                end,
                format, 
                start
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsStats(
    idSite: string,
    attributeCodes: string,
    end: number,
    interval: string,
    show_instance: boolean,
    start: number,
    type: string,
  ): Promise<VRM.Stats.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.Stats.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `/installations/${idSite}` + VRMConstant.USERS, {
            params: {
                idSite,
                attributeCodes,
                end,
                interval,
                show_instance,
                start,
                type
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async installationsOverallstats(
    idSite: string,
    attributeCodes: string,
    type: string,
  ): Promise<VRM.OverallStats.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.OverallStats.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL + `
          /installations/${idSite}` + VRMConstant.INSTALLATIONS, {
            params: {
                attributeCodes,
                type
            }
          }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsGraph(
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
  ): Promise<VRM.GeneralWidgetsGraph.Response> {
    try {
      const response = await lastValueFrom<{
        data: VRM.GeneralWidgetsGraph.Response;
      }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_GRAPH,
          {
            params: {
              attributeCodes,
              attributeIds,
              end,
              instance,
              pointsPerPixel,
              roundedEnd,
              roundedStart,
              start,
              useMinMax,
              width,
            },
          },
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsGPS(
    idSite: string,
    instance: number,
  ): Promise<VRM.WidgetGPS.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetGPS.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `
          /installations/${idSite}` +
            VRMConstant.WIDGETS_GPS, {
                params: {
                    instance
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsHoursofAC(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetHoursOfAc.Response> {
    try {
      const response = await lastValueFrom<{
        data: VRM.WidgetHoursOfAc.Response;
      }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_HOURS_OF_AC,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsGenerator(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_GENERATOR_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsInput(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_INPUT_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsInverter(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_INVERTER_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsMPPT(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_MPPT_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsCharge(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_CHARGE_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsESSBattery(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_ESS_BATTERY_LIFE_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsFuelCell(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_FUEL_CELL_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsBatteryExternal(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_BATTERY_EXTERNAL_REALY_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsBatteryRelay(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_BATTERY_REALY,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsBatteryMonitor(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_BATTERY_MONITOR_WARNINGS_AND_ALARMS,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsGatewayRelay(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_GATEWAY_REALY_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsGatewayRelayTwo(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_GATEWAY_REALY_TWO_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsChargeRelayState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_CHARGE_REALY_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsSolarState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGET_SOLAR_CHARGE_REALY_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsVeBusState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGET_VE_BUS_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsVeBusWarnings(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGET_VE_BUS_WARNINGS_AND_ALARMS,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsInverterChargerState(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_INVERTER_CHARGE_STATE,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }

  async widgetsInverterChargeWarnings(
    idSite: string,
    end: number,
    instance: number,
    start: number,
  ): Promise<VRM.WidgetsState.Response> {
    try {
      const response = await lastValueFrom<{ data: VRM.WidgetsState.Response }>(
        this.httpService.get(
          VRMConstant.BASE_URL +
            `/installations/${idSite}` +
            VRMConstant.WIDGETS_INVERTER_CHARGE_WARNINGS_AND_ALARMS,
            {
                params: {
                    end,
                    instance,
                    start
                }
            }
        ),
      );
      return response.data;
    } catch (error) {
      throw new HttpResponseException(error);
    }
  }
}
