import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  bio: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  resumeUrl: string;

  @Column({ nullable: true })
  linkedinUrl: string;

  @Column({ nullable: true })
  githubUrl: string;

  @Column({ nullable: true })
  twitterUrl: string;

  @Column('simple-array', { nullable: true })
  skills: string[];

  @Column('simple-array', { nullable: true })
  languages: string[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
