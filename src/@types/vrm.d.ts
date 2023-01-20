declare namespace VRM {
  namespace DTO {
    interface Installations {
      extended;
    }
  }

  interface Login {
    username: string;
    password: string;
  }

  interface LoginResponse {
    token?: null | string;
    idUser: number;
    verification_mode: string;
    verification_sent: boolean;
  }

  interface LoginDemoResponse {
    token?: null | string;
  }

  interface LogoutResponse {
    token?: null | string;
  }

  interface Tag {
    idTag: number;
    name: string;
    automatic: boolean;
  }

  interface Image {
    idSiteImage: number;
    imageName: string;
    url: string;
  }

  interface ViewPermissions {
    update_settings: boolean;
    settings: boolean;
    diagnostics: boolean;
    share: boolean;
    vnc: boolean;
    mqtt_rpc: boolean;
    vebus: boolean;
    twoway: boolean;
    exact_location: boolean;
    nodered: boolean;
    nodered_dash: boolean;
    signalk: boolean;
  }

  interface DataAttributeEnumValue {
    nameEnum: string;
    valueEnum: number;
  }

  interface Extended {
    idDataAttribute: number;
    code: string;
    description: string;
    formatWithUnit: string;
    dataType: string;
    textValue: string;
    instance: string;
    timestamp: string;
    dbusServiceType: string;
    dbusPath: string;
    rawValue: string;
    formattedValue: string;
    dataAttributeEnumValues: DataAttributeEnumValue[];
  }

  interface Record {
    idSite: number;
    accessLevel: number;
    owner: boolean;
    is_admin: boolean;
    name: string;
    identifier: string;
    idUser: number;
    pvMax: number;
    timezone: string;
    phonenumber?: any;
    notes?: any;
    geofence?: any;
    geofenceEnabled: boolean;
    realtimeUpdates: boolean;
    hasMains: number;
    hasGenerator: number;
    noDataAlarmTimeout?: any;
    alarmMonitoring: number;
    invalidVRMAuthTokenUsedInLogRequest: number;
    syscreated: number;
    grafanaEnabled: number;
    shared: boolean;
    device_icon: string;
    alarm: boolean;
    last_timestamp: number;
    current_time: string;
    timezone_offset: number;
    demo_mode: boolean;
    mqtt_webhost: string;
    high_workload: boolean;
    current_alarms: string[];
    num_alarms: number;
    avatar_url?: any;
    tags: Tag[];
    images: Image[];
    view_permissions: ViewPermissions;
    extended: Extended[];
  }

  interface UserinstallationsResponse {
    success: boolean;
    records: Record[];
  }

  interface AccessTokenCreate {
    name: string;
  }

  interface AccessTokenResponse {
    success: boolean;
    token: number;
    idAccessToken: string;
  }

  interface Token {
    name: string;
    idAccessToken: string;
    createdOn: string;
    scope: string;
    expires?: any;
  }

  interface AccessTokenListResponse {
    success: boolean;
    tokens: Token[];
  }

  interface Data {
    removed: number;
  }

  interface AccessTokenRevoke {
    success: boolean;
    data: Data;
  }

  namespace SystemOverview {
    interface Values {
      property1: number;
      property2: number;
    }

    interface EnumData {
      nameEnum: string;
      valueEnum: number;
      values: Values;
    }

    interface Property1 {
      loggedValue: string;
      value: string;
    }

    interface Property2 {
      loggedValue: string;
      value: string;
    }

    interface Values2 {
      property1: Property1;
      property2: Property2;
    }

    interface Setting {
      description: string;
      enumData: EnumData[];
      idDataAttribute: string;
      idDeviceType: string;
      idSite: string;
      idUser?: any;
      loggedTimestamp: string;
      loggedValue: number;
      timestamp?: any;
      user_name?: any;
      value?: any;
      attributes: number[];
      values: Values2;
    }

    interface DevicesPerPhase {
      L1: number;
      L2: number;
      L3: number;
    }

    interface Vid {
      enumValue: string;
      devicesPerPhase: DevicesPerPhase;
    }

    interface Device {
      name: string;
      customName?: any;
      productCode: string;
      productName: string;
      idSite: number;
      firmwareVersion: string;
      lastConnection: string;
      class: string;
      connection: string;
      instance: number;
      idDeviceType: number;
      settings: Setting[];
      signalRSSI: string;
      signalSNR: string;
      signalFrequency: string;
      antennaType: string;
      networkName: string;
      loggingInterval: number;
      identifier: string;
      lastPowerUpOrRestart: string;
      machineSerialNumber?: any;
      remoteOnLan: string;
      autoUpdate: string;
      updateTo: string;
      vncSshAuth: boolean;
      vncStatus: string;
      vncPort: number;
      twoWayCommunication: boolean;
      remoteSupportEnabled: boolean;
      remoteSupportPort: number;
      remoteSupportIp: string;
      remoteSupport: string;
      productId: string;
      vmc: string;
      vid: Vid;
      tempSensorConnected: boolean;
      froniusDeviceType: string;
      pL: string;
      pdV: string;
      inputType: string;
      inputState: string;
    }

    interface Records {
      devices: Device[];
      unconfigured_devices: boolean;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace Diagnostics {
    interface DataAttributeEnumValue {
      nameEnum: string;
      valueEnum: number;
    }

    interface Records {
      idSite: number;
      timestamp: number;
      Device: string;
      instance: number;
      idDataAttribute: number;
      description: string;
      formatWithUnit: string;
      dbusServiceType?: any;
      dbusPath?: any;
      code: string;
      bitmask: number;
      formattedValue: string;
      rawValue: string;
      id: number;
      dataAttributeEnumValues: DataAttributeEnumValue[];
    }

    interface Response {
      success: boolean;
      records: Records;
      num_records: number;
    }
  }

  interface TagsResponse {
    success: boolean;
    tags: string[];
  }

  interface DataDownloadResponse {
    success: boolean;
  }

  namespace Stats {
    interface Records {
      property1: number[][];
      property2: number[][];
    }

    interface Totals {
      property1: number;
      property2: number;
    }

    interface Response {
      success: boolean;
      records: Records;
      totals: Totals;
    }
  }

  namespace OverallStats {
    interface Totals {
      property1: number;
      property2: number;
    }

    interface Percentages {
      property1: number;
      property2: number;
    }

    interface Year {
      totals: Totals;
      percentages: Percentages;
    }

    interface Totals2 {
      property1: number;
      property2: number;
    }

    interface Percentages2 {
      property1: number;
      property2: number;
    }

    interface Month {
      totals: Totals2;
      percentages: Percentages2;
    }

    interface Totals3 {
      property1: number;
      property2: number;
    }

    interface Percentages3 {
      property1: number;
      property2: number;
    }

    interface Week {
      totals: Totals3;
      percentages: Percentages3;
    }

    interface Totals4 {
      property1: number;
      property2: number;
    }

    interface Percentages4 {
      property1: number;
      property2: number;
    }

    interface Today {
      totals: Totals4;
      percentages: Percentages4;
    }

    interface Records {
      year: Year;
      month: Month;
      week: Week;
      today: Today;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace GeneralWidgetsGraph {
    interface Data {
      property1: number[][];
      property2: number[][];
    }

    interface Property1 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Property2 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Meta {
      property1: Property1;
      property2: Property2;
    }

    interface Records {
      data: Data;
      meta: Meta;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace WidgetGPS {
    interface SecondsAgo {
      value: string;
      valueFormattedWithUnit: string;
    }

    interface Property1 {
      code: string;
      dataAttributeName: string;
      dataType: string;
      dbusPath: string;
      dbusServiceType: string;
      formatValueOnly: string;
      formatWithUnit: string;
      formattedValue: string;
      hasOldData: boolean;
      idDataAttribute: string;
      instance: number;
      isKeyDataAttribute: string;
      isValid: string;
      nameEnum?: any;
      rawValue: string;
      secondsAgo: string;
      secondsToNextLog: string;
      value: string;
      valueEnum?: any;
      valueFloat?: any;
      valueFormattedValueOnly: string;
      valueFormattedWithUnit: string;
      valueString?: any;
    }

    interface Property2 {
      code: string;
      dataAttributeName: string;
      dataType: string;
      dbusPath: string;
      dbusServiceType: string;
      formatValueOnly: string;
      formatWithUnit: string;
      formattedValue: string;
      hasOldData: boolean;
      idDataAttribute: string;
      instance: number;
      isKeyDataAttribute: string;
      isValid: string;
      nameEnum?: any;
      rawValue: string;
      secondsAgo: string;
      secondsToNextLog: string;
      value: string;
      valueEnum?: any;
      valueFloat?: any;
      valueFormattedValueOnly: string;
      valueFormattedWithUnit: string;
      valueString?: any;
    }

    interface Attributes {
      secondsAgo: SecondsAgo;
      hasOldData: boolean;
      property1: Property1;
      property2: Property2;
    }

    interface Data {
      attributes: Attributes;
      geofence?: any;
      geofenceAlarmActive?: any;
      geofenceEnabled: string;
    }

    interface Property12 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Property22 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Meta {
      property1: Property12;
      property2: Property22;
    }

    interface Records {
      data: Data;
      meta: Meta;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace WidgetHoursOfAc {
    interface Records {
      data?: any;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace WidgetsState {
    interface Property1 {
      0: string;
      1: number;
      2: number;
    }

    interface Property2 {
      0: string;
      1: number;
      2: number;
    }

    interface Data {
      property1: Property1;
      property2: Property2;
    }

    interface Property12 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Property22 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Meta {
      property1: Property12;
      property2: Property22;
    }

    interface Property13 {
      property1: string;
      property2: string;
    }

    interface Property23 {
      property1: string;
      property2: string;
    }

    interface Enums {
      property1: Property13;
      property2: Property23;
    }

    interface Property14 {
      property1: number;
      property2: number;
    }

    interface Property24 {
      property1: number;
      property2: number;
    }

    interface Sort {
      property1: Property14;
      property2: Property24;
    }

    interface Property15 {
      resampled: boolean;
      'original count': number;
      'resampled count': number;
      'smallest gap': number;
    }

    interface Property25 {
      resampled: boolean;
      'original count': number;
      'resampled count': number;
      'smallest gap': number;
    }

    interface Buckets {
      property1: Property15;
      property2: Property25;
    }

    interface Records {
      data: Data;
      meta: Meta;
      enums: Enums;
      sort: Sort;
      buckets: Buckets;
    }

    interface Response {
      success: boolean;
      records: Records;
    }
  }

  namespace WidgetSummary {
    interface SecondsAgo {
      value: string;
      valueFormattedWithUnit: string;
    }

    interface DataAttributeEnumValue {
      nameEnum: string;
      valueEnum: number;
    }

    interface Property1 {
      code: string;
      dataAttributeName: string;
      dataType: string;
      dbusPath: string;
      dbusServiceType: string;
      formatValueOnly: string;
      formatWithUnit: string;
      formattedValue: string;
      hasOldData: boolean;
      idDataAttribute: string;
      instance: number;
      isKeyDataAttribute: string;
      isValid: string;
      nameEnum?: any;
      rawValue: string;
      secondsAgo: string;
      secondsToNextLog: string;
      value: string;
      valueEnum?: any;
      valueFloat?: any;
      valueFormattedValueOnly: string;
      valueFormattedWithUnit: string;
      valueString?: any;
      dataAttributeEnumValues: DataAttributeEnumValue[];
    }

    interface DataAttributeEnumValue2 {
      nameEnum: string;
      valueEnum: number;
    }

    interface Property2 {
      code: string;
      dataAttributeName: string;
      dataType: string;
      dbusPath: string;
      dbusServiceType: string;
      formatValueOnly: string;
      formatWithUnit: string;
      formattedValue: string;
      hasOldData: boolean;
      idDataAttribute: string;
      instance: number;
      isKeyDataAttribute: string;
      isValid: string;
      nameEnum?: any;
      rawValue: string;
      secondsAgo: string;
      secondsToNextLog: string;
      value: string;
      valueEnum?: any;
      valueFloat?: any;
      valueFormattedValueOnly: string;
      valueFormattedWithUnit: string;
      valueString?: any;
      dataAttributeEnumValues: DataAttributeEnumValue2[];
    }

    interface Data {
      secondsAgo: SecondsAgo;
      hasOldData: boolean;
      property1: Property1;
      property2: Property2;
    }

    interface Property12 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Property22 {
      code: string;
      description: string;
      formatWithValueOnly: string;
      formatWithUnit: string;
    }

    interface Meta {
      property1: Property12;
      property2: Property22;
    }

    interface Records {
      data: Data;
      meta: Meta;
      attributeOrder: number[];
    }

    interface RootObject {
      success: boolean;
      records: Records;
    }
  }
}
