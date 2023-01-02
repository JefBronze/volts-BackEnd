import { HttpModule } from "@nestjs/axios";
import { Global, Module } from "@nestjs/common";
import { VRMHttpProvider } from "./providers/http/vrm.http.provider";

@Global()
@Module({
    imports: [HttpModule.register({})],
    providers: [{
        provide: "VRM",
        useClass: VRMHttpProvider
    }],
    exports: [{
        provide: "VRM",
        useClass: VRMHttpProvider
    }]
})
export class SharedModule {}