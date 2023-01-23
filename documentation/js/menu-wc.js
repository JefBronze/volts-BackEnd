'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Volts documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' : 'data-target="#xs-controllers-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' :
                                            'id="xs-controllers-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' : 'data-target="#xs-injectables-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' :
                                        'id="xs-injectables-links-module-AppModule-aa7917488ef8a9bd664fd2d092e8fba86f2c75d9491538a5bb946dd5df24fd1e7bf6f4698a4e9f5d2401e3aad24a0f9d3054ddb9694149fb78357d478a3d55a5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphModule.html" data-type="entity-link" >GraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' : 'data-target="#xs-controllers-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' :
                                            'id="xs-controllers-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' }>
                                            <li class="link">
                                                <a href="controllers/GraphController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GraphController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' : 'data-target="#xs-injectables-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' :
                                        'id="xs-injectables-links-module-GraphModule-fc2cb519ab26fc691333652577e23d307c3c4ff9e3ceca61dbf54c3976cfb8721b3c2b4411981d9cba25528c811c9e75a46694731336251cf3ad586c53b108c1"' }>
                                        <li class="link">
                                            <a href="injectables/AccesstokensCreateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccesstokensCreateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccesstokensListService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccesstokensListService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccesstokensRevokeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccesstokensRevokeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InfoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsDataDownloadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsDataDownloadService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsDiagnosticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsDiagnosticsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsGPSService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsGPSService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsStatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsStatsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsSystemOverviewService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsSystemOverviewService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InstallationsTagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstallationsTagsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginDemoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginDemoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogoutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetBatteryExeternalService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetBatteryExeternalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetBatteryMonitorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetBatteryMonitorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetBatteryRelayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetBatteryRelayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetChargeRelayStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetChargeRelayStateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetESSBatteryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetESSBatteryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetFuelCellService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetFuelCellService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetVeBusStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetVeBusStateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetVeBusWarningsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetVeBusWarningsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsGPSService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsGPSService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsGatewayRelayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsGatewayRelayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsGatewayRelayTwoService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsGatewayRelayTwoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsGraphService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsGraphService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsHoursofACService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsHoursofACService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsInputService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsInputService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsInverterChargeWarningsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsInverterChargeWarningsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsInverterChargerStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsInverterChargerStateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsInverterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsInverterService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetsSolarStateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WidgetsSolarStateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GraphController.html" data-type="entity-link" >GraphController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ExceptionFilterHttp.html" data-type="entity-link" >ExceptionFilterHttp</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpResponseException.html" data-type="entity-link" >HttpResponseException</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccesstokensCreateService.html" data-type="entity-link" >AccesstokensCreateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccesstokensListService.html" data-type="entity-link" >AccesstokensListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccesstokensRevokeService.html" data-type="entity-link" >AccesstokensRevokeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InfoService.html" data-type="entity-link" >InfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsDataDownloadService.html" data-type="entity-link" >InstallationsDataDownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsDiagnosticsService.html" data-type="entity-link" >InstallationsDiagnosticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsGPSService.html" data-type="entity-link" >InstallationsGPSService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsService.html" data-type="entity-link" >InstallationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsStatsService.html" data-type="entity-link" >InstallationsStatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsSystemOverviewService.html" data-type="entity-link" >InstallationsSystemOverviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InstallationsTagsService.html" data-type="entity-link" >InstallationsTagsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginDemoService.html" data-type="entity-link" >LoginDemoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogoutService.html" data-type="entity-link" >LogoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VRMHttpProvider.html" data-type="entity-link" >VRMHttpProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetBatteryExeternalService.html" data-type="entity-link" >WidgetBatteryExeternalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetBatteryMonitorService.html" data-type="entity-link" >WidgetBatteryMonitorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetBatteryRelayService.html" data-type="entity-link" >WidgetBatteryRelayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetChargeRelayStateService.html" data-type="entity-link" >WidgetChargeRelayStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetESSBatteryService.html" data-type="entity-link" >WidgetESSBatteryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetFuelCellService.html" data-type="entity-link" >WidgetFuelCellService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsGatewayRelayService.html" data-type="entity-link" >WidgetsGatewayRelayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsGatewayRelayTwoService.html" data-type="entity-link" >WidgetsGatewayRelayTwoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsGPSService.html" data-type="entity-link" >WidgetsGPSService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsGraphService.html" data-type="entity-link" >WidgetsGraphService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsHoursofACService.html" data-type="entity-link" >WidgetsHoursofACService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsInputService.html" data-type="entity-link" >WidgetsInputService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsInverterChargerStateService.html" data-type="entity-link" >WidgetsInverterChargerStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsInverterChargeWarningsService.html" data-type="entity-link" >WidgetsInverterChargeWarningsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsInverterService.html" data-type="entity-link" >WidgetsInverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetsSolarStateService.html" data-type="entity-link" >WidgetsSolarStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetVeBusStateService.html" data-type="entity-link" >WidgetVeBusStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetVeBusWarningsService.html" data-type="entity-link" >WidgetVeBusWarningsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IVRM.html" data-type="entity-link" >IVRM</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});