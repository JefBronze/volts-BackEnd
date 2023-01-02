import { Inject, Injectable } from "@nestjs/common";
import { IVRM } from "modules/shared/providers/interfaces/ivrm";

@Injectable()
export class InstallationsService {
    constructor(
        @Inject('VRM')
        private readonly vrm: IVRM
    ){}

    async execute({ extended }: any) {
        console.log({ extended })
        return await this.vrm.userInstallations(extended);
    }
}