import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { GraphModule } from './../src/modules/graph/graph.module';

describe('AppController (e2e)', () => {
  jest.setTimeout(30000);
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, GraphModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  test('/graph/installations (GET)', async () => {
    const { body, status } = await request(app.getHttpServer()).get('/graph/installations')
    console.log(body, status)  
    expect(status).toEqual(200)
  }, 3000);
});
