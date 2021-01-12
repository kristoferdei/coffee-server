import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
export declare class MessagesController {
    private readonly messageService;
    constructor(messageService: MessagesService);
    getAll(): Promise<any>;
    getOne(messageId: number): Promise<any>;
    createOne(createMessageDto: CreateMessageDto): Promise<any>;
}
