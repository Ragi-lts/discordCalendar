import { Service } from "typedi";
import { EntityNotFoundError, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { AppDataSource } from "../../../ormconfig";
import { Todo } from "../Entity/Todos";
import { User } from "../Entity/User";

@Service()
export class TodoService {
  @InjectRepository(Todo)
  private repository: Repository<Todo> = AppDataSource.getRepository(Todo);

  async findAllTodos(): Promise<Todo[]> {
    const todos = this.repository.find();
    if (!todos) throw new EntityNotFoundError(User, "Not Found Entity");
    console.log(`get ${(await todos).length} todos from 'Todo' table.`);
    return todos;
  }
  async appendTodo(todo: Todo) {
    this.repository.manager.save(todo);
  }
}
