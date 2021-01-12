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
var CoffeeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coffee_entity_1 = require("./entity/coffee.entity");
const typeorm_2 = require("typeorm");
const coffee_dto_1 = require("./dto/coffee.dto");
let CoffeeService = CoffeeService_1 = class CoffeeService {
    constructor(coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }
    async getOne(taskId) {
        const coffee = await this.coffeeRepository.findOne(taskId);
        if (!coffee)
            throw new common_1.NotFoundException(`Coffee with the id ${taskId} was not found`);
        return CoffeeService_1.entityToDTO(coffee);
    }
    async createOne(createCoffeeRequest) {
        const coffee = new coffee_entity_1.Coffee();
        coffee.name = createCoffeeRequest.name;
        coffee.price = createCoffeeRequest.price;
        coffee.description = createCoffeeRequest.description;
        coffee.size = createCoffeeRequest.size;
        coffee.image = createCoffeeRequest.image;
        coffee.order = createCoffeeRequest.order;
        await this.coffeeRepository.save(coffee);
        return CoffeeService_1.entityToDTO(coffee);
    }
    static entityToDTO(coffee) {
        const coffeeDto = new coffee_dto_1.CoffeeDto();
        coffeeDto.id = coffee.id;
        coffeeDto.name = coffee.name;
        coffeeDto.price = coffee.price;
        coffeeDto.description = coffee.description;
        coffeeDto.size = coffee.size;
        coffeeDto.image = coffee.image;
        coffeeDto.order = coffee.order;
        return coffeeDto;
    }
    async getAll() {
        const coffees = await this.coffeeRepository.find();
        return coffees.map(x => CoffeeService_1.entityToDTO(x));
    }
    async updateOne(coffeeId, updateCoffeeRequest) {
        const coffee = await this.getOne(coffeeId);
        coffee.name = updateCoffeeRequest.name || coffee.name;
        coffee.price = updateCoffeeRequest.price || coffee.price;
        coffee.description = updateCoffeeRequest.description || coffee.description;
        coffee.size = updateCoffeeRequest.size || coffee.size;
        coffee.image = updateCoffeeRequest.image || coffee.image;
        coffee.order = updateCoffeeRequest.order || coffee.order;
        await this.coffeeRepository.save(coffee);
        return CoffeeService_1.entityToDTO(coffee);
    }
    async deleteOne(coffeeId) {
        const coffee = await this.getOne(coffeeId);
        await this.coffeeRepository.remove(coffee);
    }
};
CoffeeService = CoffeeService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(coffee_entity_1.Coffee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoffeeService);
exports.CoffeeService = CoffeeService;
//# sourceMappingURL=coffee.service.js.map