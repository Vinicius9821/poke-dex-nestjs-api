"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const poke_dex_module_1 = require("../../../poke-dex.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(poke_dex_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=poke-dex-api.js.map