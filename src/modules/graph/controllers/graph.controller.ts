import { Controller, Get, Query } from "@nestjs/common";
import { InstallationsService } from "../services/installations.services";

@Controller('graph')
export class GraphController {
    constructor(
        private readonly installationsService: InstallationsService 
    ) {}

    @Get('installations')
    async installations(@Query('extended') extended: string) {
        return await this.installationsService.execute({ extended: Number(extended) })
    }
}
