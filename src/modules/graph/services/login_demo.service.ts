import { Inject, Injectable } from '@nestjs/common';
import { IVRM } from 'modules/shared/providers/interfaces/ivrm';

@Injectable()
export class LoginDemoService {
  constructor(
    @Inject('VRM')
    private readonly vrm: IVRM,
  ) {}

  async execute() {
    return await this.vrm.loginDemo();
  }
}
