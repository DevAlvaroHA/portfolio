import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('experience')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column({ type: 'text' })
  description: string;

  @Column('simple-array', { nullable: true })
  responsibilities: string[];

  @Column('simple-array', { nullable: true })
  technologies: string[];

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ default: false })
  current: boolean;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  companyUrl: string;

  @Column({ nullable: true })
  employmentType: string; // Full-time, Part-time, Freelance, Contract

  @Column({ default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
