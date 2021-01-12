"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeController = void 0;
const common_1 = require("@nestjs/common");
const coffee_service_1 = require("./coffee.service");
const create_coffee_dto_1 = require("./dto/create-coffee.dto");
const update_coffee_dto_1 = require("./dto/update-coffee.dto");
let CoffeeController = class CoffeeController {
    constructor(coffeeService) {
        this.coffeeService = coffeeService;
    }
    async getAll() {
        return await this.coffeeService.getAll();
    }
    async getOne(coffeeId) {
        return await this.coffeeService.getOne(coffeeId);
    }
    async createOne(createCoffeeDto) {
        return await this.coffeeService.createOne(createCoffeeDto);
    }
    async updateOne(coffeeId, updateTaskRequest) {
        return await this.coffeeService.updateOne(coffeeId, updateTaskRequest);
    }
    async deleteOne(coffeeId) {
        await this.coffeeService.deleteOne(coffeeId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coffee_dto_1.CreateCoffeeDto]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "createOne", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_coffee_dto_1.UpdateCoffeeDto]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "updateOne", null);
__decorate([
    common_1.Delete('/:id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "deleteOne", null);
CoffeeController = __decorate([
    common_1.Controller('coffees'),
    __metadata("design:paramtypes", [coffee_service_1.CoffeeService])
], CoffeeController);
exports.CoffeeController = CoffeeController;
//# sourceMappingURL=coffee.controller.js.map