import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('contact_messages')
export class ContactMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  subject: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ default: false })
  read: boolean;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  company: string;

  @CreateDateColumn()
  createdAt: Date;
}
