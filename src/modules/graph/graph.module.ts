import { Module } from "@nestjs/common";
import { GraphController } from "./controllers/graph.controller";
import { InstallationsService } from "./services/installations.services";
import { SharedModule } from "../../modules/shared/shared.module";

@Module({
    imports: [SharedModule],
    controllers: [GraphController],
    providers: [InstallationsService]
})
export class GraphModule {}