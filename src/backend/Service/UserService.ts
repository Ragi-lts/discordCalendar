import { Service } from "typedi";
import { EntityNotFoundError, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { AppDataSource } from "@ormconfig";
import { User } from "@Entity/User";

@Service()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User> = AppDataSource.getRepository(User);

  async findAllUsers(): Promise<User[]> {
    const users = this.userRepository.find();
    if (!users) throw new EntityNotFoundError(User, "Not Found Entity");
    console.log(`get ${(await users).length} users from 'users' table.`);
    return users;
  }
  async appendUser(user: User) {
    const isExist: User | null = await this.userRepository.findOneBy(user);
    if (!isExist) this.userRepository.manager.save(user);
    else console.error("already exists user.");
  }
  async deleteUserById(userId: number): Promise<boolean | null> {
    return new Promise((reject, resolve) => {
      this.userRepository
        .delete({ id: userId })
        .then((res) => {
          if (res.affected == 0) {
            console.error(`Can't find userId = ${userId}`);
            reject(false);
          } else {
            console.log("deleted user id = ", userId);
            resolve(true);
          }
        })
        .catch((err) => {
          console.error("Cannot deleted: ", err);
          reject(null);
        });
    });
  }
}
