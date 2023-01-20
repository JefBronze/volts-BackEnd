import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class WidgetsGraphService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({
    idSite,
    attributeCodes,
    attributeIds,
    end,
    instance,
    pointsPerPixel,
    roundedEnd,
    roundedStart,
    start,
    useMinMax,
    width,
  }: any) {
    return await this.vrm.widgetsGraph(
      idSite,
      attributeCodes,
      attributeIds,
      end,
      instance,
      pointsPerPixel,
      roundedEnd,
      roundedStart,
      start,
      useMinMax,
      width,
    );
  }
}
