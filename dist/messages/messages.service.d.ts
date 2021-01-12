import { Repository } from 'typeorm';
import { Message } from './entity/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    getOne(taskId: number): Promise<any>;
    createOne(createMessageRequest: CreateMessageDto): Promise<any>;
    private static entityToDTO;
    getAll(): Promise<any>;
}
