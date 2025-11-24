import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('education')
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution: string;

  @Column()
  degree: string;

  @Column({ nullable: true })
  fieldOfStudy: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({ default: false })
  current: boolean;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  institutionUrl: string;

  @Column('simple-array', { nullable: true })
  activities: string[];

  @Column({ default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
