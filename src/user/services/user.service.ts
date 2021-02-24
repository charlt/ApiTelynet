import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
  /**
   * Función encargada de guardar un usuario
   * 
   * @param user Objeto de tipo usuario.
   */
  async save(user: any) {
    try {
      const createdUser = await this.usersRepository.save(user);
      console.log('createdUser :>> ', createdUser);
      return createdUser
    } catch (error) {
      let message = error._message ?? error.toString()
      return { error: message }
    }
  }
  async updateUser(user,userId){
    try {
      const updated = await this.usersRepository.update(userId,user)
      console.log('updated :>> ', updated);
      return updated
    } catch (error) {
      let message = error._message ?? error.toString()
      return { error: message }
    }
  }

  /**
   * Función encargada de extraer a todos los usuarios
   */
  async getUsers(): Promise<any[]> {
    try {
      const users: Array<any> = await this.usersRepository.find();
      return users;
    } catch (error) {
      throw new Error("Internal server error");

    }
  }

  /**
   * Función encargada de extraer los datos de un usuario
   * 
   * @param userId Identificador de usuario
   */
  async getUser(userId: string) {
    try {
      const user: any = await this.usersRepository.findOne(userId);
      return user;
    } catch (error) {
      return {
        error: error.toString()
      }
    }
  }

  async deleteUser(userId: any) {
    try {
      const user: any = await this.usersRepository.delete(userId);
      return user;
    } catch (error) {
      return {
        error: error.toString()
      }
    }
  }
}
