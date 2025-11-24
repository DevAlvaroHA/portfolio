import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './entities/contact-message.entity';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactMessage)
    private contactRepository: Repository<ContactMessage>,
  ) {}

  async create(createContactMessageDto: CreateContactMessageDto): Promise<ContactMessage> {
    const message = this.contactRepository.create(createContactMessageDto);
    return await this.contactRepository.save(message);
  }

  async findAll(): Promise<ContactMessage[]> {
    return await this.contactRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findUnread(): Promise<ContactMessage[]> {
    return await this.contactRepository.find({
      where: { read: false },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<ContactMessage> {
    const message = await this.contactRepository.findOne({ where: { id } });
    if (!message) {
      throw new NotFoundException(`Contact message with ID ${id} not found`);
    }
    return message;
  }

  async markAsRead(id: number): Promise<ContactMessage> {
    const message = await this.findOne(id);
    message.read = true;
    return await this.contactRepository.save(message);
  }

  async remove(id: number): Promise<void> {
    const message = await this.findOne(id);
    await this.contactRepository.remove(message);
  }
}
