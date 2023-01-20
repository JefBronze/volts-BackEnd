import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class InstallationsStatsService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({
    idSite,
    attributeCodes,
    end,
    interval,
    show_instance,
    start,
    type,
  }) {
    return await this.vrm.installationsStats(
      idSite,
      attributeCodes,
      end,
      interval,
      show_instance,
      start,
      type,
    );
  }
}
