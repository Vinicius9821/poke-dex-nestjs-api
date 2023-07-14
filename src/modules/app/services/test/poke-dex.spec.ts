import { Test, TestingModule } from '@nestjs/testing';
import { PokeDexController } from '../../../api/controllers/poke-dex.controller';
import { PokeDexService } from '../poke-dex.service';
import { INestApplication } from '@nestjs/common';

describe('AppController', () => {
  
  let app: INestApplication;

  beforeAll(async() => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PokeDexController],
      providers: [PokeDexService]
    }).compile();

    app = module.createNestApplication()

    await app.init();

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

    // it('should return "Hello World!"', () => {
    //   expect(appController.getHello()).toBe('Hello World!');
    // });

});
