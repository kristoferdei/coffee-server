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
var MessagesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("./entity/message.entity");
const message_dto_1 = require("./dto/message.dto");
let MessagesService = MessagesService_1 = class MessagesService {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async getOne(taskId) {
        const message = await this.messageRepository.findOne(taskId);
        if (!message)
            throw new common_1.NotFoundException(`Message with the id ${taskId} was not found`);
        return MessagesService_1.entityToDTO(message);
    }
    async createOne(createMessageRequest) {
        const message = new message_entity_1.Message();
        message.firstname = createMessageRequest.firstname;
        message.lastname = createMessageRequest.lastname;
        message.email = createMessageRequest.email;
        message.message = createMessageRequest.message;
        await this.messageRepository.save(message);
        return MessagesService_1.entityToDTO(message);
    }
    static entityToDTO(coffee) {
        const messageDto = new message_dto_1.MessageDto();
        messageDto.id = coffee.id;
        messageDto.firstname = coffee.firstname;
        messageDto.lastname = coffee.lastname;
        messageDto.email = coffee.email;
        messageDto.message = coffee.message;
        return messageDto;
    }
    async getAll() {
        const messages = await this.messageRepository.find();
        return messages.map(x => MessagesService_1.entityToDTO(x));
    }
};
MessagesService = MessagesService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map