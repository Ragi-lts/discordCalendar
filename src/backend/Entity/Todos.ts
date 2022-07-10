import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity("todos")
export class Todo {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @CreateDateColumn()
  readonly created_time?: Date;

  @UpdateDateColumn()
  readonly updated_time?: Date;

  constructor(name: string, description: string, user: User) {
    this.title = name;
    this.description = description;
    this.user = user;
  }
}
