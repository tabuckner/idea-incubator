import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class Idea {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  body: string;

  @CreateDateColumn({})
  created: Date;

  @UpdateDateColumn()
  lastUpdated: Date;

  @VersionColumn()
  version: number;
}
