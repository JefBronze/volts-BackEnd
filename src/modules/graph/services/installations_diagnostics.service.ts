import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class InstallationsDiagnosticsService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({ idSite, count, page }: any) {
    return await this.vrm.installationsDiagnostics(idSite, count, page);
  }
}
