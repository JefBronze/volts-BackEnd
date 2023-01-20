import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class InstallationsDataDownloadService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({ idSite, async, dataype, debug, end, format, start }: any) {
    return await this.vrm.installationsDataDownload(
      idSite,
      async,
      dataype,
      debug,
      end,
      format,
      start,
    );
  }
}
