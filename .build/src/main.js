"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const poke_dex_api_module_1 = require("./modules/api/poke-dex-api.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(poke_dex_api_module_1.PodeDexApiModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map