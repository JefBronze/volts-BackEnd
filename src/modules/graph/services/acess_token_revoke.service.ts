import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class AccesstokensRevokeService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute({ idAccessToken, idUser }: any) {
    return await this.vrm.userAccesstokensRevoke(idAccessToken, idUser);
  }
}
