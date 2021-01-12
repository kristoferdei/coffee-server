"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://192.168.1.71:3000', 'http://localhost:3000']
    });
    await app.listen(process.env.PORT || 4000);
}
bootstrap().then(() => {
    console.log('coffee-server started successfully');
});
//# sourceMappingURL=main.js.map