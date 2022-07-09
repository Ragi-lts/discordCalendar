import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Todo } from "./Todos";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @CreateDateColumn()
  readonly created_time?: Date;

  @UpdateDateColumn()
  readonly updated_time?: Date;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos?: Todo[];

  constructor(name: string) {
    this.name = name;
  }
}
