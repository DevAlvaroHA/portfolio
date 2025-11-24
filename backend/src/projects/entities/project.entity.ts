import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column('simple-array')
  technologies: string[];

  @Column({ nullable: true })
  liveUrl: string;

  @Column({ nullable: true })
  githubUrl: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column('simple-array', { nullable: true })
  features: string[];

  @Column({ default: false })
  featured: boolean;

  @Column({ type: 'date', nullable: true })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  category: string;

  @Column({ default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
