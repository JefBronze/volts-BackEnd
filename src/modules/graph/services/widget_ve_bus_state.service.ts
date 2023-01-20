import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class WidgetVeBusStateService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({ idSite, end, instance, start }: any) {
    return await this.vrm.widgetsVeBusState(idSite, end, instance, start);
  }
}
