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
var OrdersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entity/order.entity");
const order_dto_1 = require("./dto/order.dto");
let OrdersService = OrdersService_1 = class OrdersService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async getOne(taskId) {
        const order = await this.orderRepository.findOne(taskId);
        if (!order)
            throw new common_1.NotFoundException(`Order with the id ${taskId} was not found`);
        return OrdersService_1.entityToDTO(order);
    }
    async createOne(createOrderRequest) {
        const order = new order_entity_1.Order();
        order.name = createOrderRequest.name;
        order.email = createOrderRequest.email;
        order.street = createOrderRequest.street;
        order.city = createOrderRequest.city;
        order.country = createOrderRequest.country;
        order.zip = createOrderRequest.zip;
        order.card = createOrderRequest.card;
        order.date = createOrderRequest.date;
        order.cvc = createOrderRequest.cvc;
        await this.orderRepository.save(order);
        return OrdersService_1.entityToDTO(order);
    }
    static entityToDTO(order) {
        const orderDto = new order_dto_1.OrderDto();
        orderDto.id = order.id;
        orderDto.name = order.name;
        orderDto.email = order.email;
        orderDto.email = order.email;
        orderDto.street = order.street;
        orderDto.city = order.city;
        orderDto.country = order.country;
        orderDto.zip = order.zip;
        orderDto.card = order.card;
        orderDto.date = order.date;
        orderDto.cvc = order.cvc;
        return orderDto;
    }
    async getAll() {
        const orders = await this.orderRepository.find();
        return orders.map(x => OrdersService_1.entityToDTO(x));
    }
};
OrdersService = OrdersService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map