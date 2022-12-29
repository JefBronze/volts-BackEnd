import { HttpModule } from "@nestjs/axios";
import { Global, Module } from "@nestjs/common";
import { VirtualTimeScheduler } from "rxjs";

@Global()
@Module({
    imports: [HttpModule.register({})],
    providers: [{
        provide: "VRM",
        useClass: VirtualTimeScheduler
    }],
    exports: [{
        provide: "VRM",
        useClass: VirtualTimeScheduler
    }]
})
export class SharedModule {}