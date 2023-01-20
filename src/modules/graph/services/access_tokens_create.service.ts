import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class AccesstokensCreateService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({ idUser, data }: any) {
    return await this.vrm.userAccesstokensCreate(idUser, data);
  }
}
