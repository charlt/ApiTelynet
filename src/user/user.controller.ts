import { Controller, Post, Get, Body, Res, HttpStatus, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserDto } from './dto/user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('/create')
  async saveUser(@Res() res, @Body() userDto: UserDto): Promise<any> {
    try {
      let user: any = await this.userService.save(userDto);
      if(!user.error){
        return res.status(HttpStatus.OK).json({
          message: 'User succesfully created',
          user,
          statusCode:200
        })
      }else{
        return res.status(HttpStatus.BAD_REQUEST).json({
          message: user.error,
          statusCode:400     
        })
      }

    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'A ocurrido un error inesperado',
        statusCode:400
      })
    }

  }


  @Get()
  async getUsers(@Res() res): Promise<any> {
    try {
      let users: Array<any> = await this.userService.getUsers();
      return res.status(HttpStatus.OK).json({
        message: 'success',
        data: users,
        statusCode:200
      })
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'A ocurrido un error inesperado',
        statusCode:400
      })
    }

  }


  @Get('/:userId')
  async getUser(@Res() res,@Param('userId') userId): Promise<any> {
    try {
      let users: Array<any> = await this.userService.getUser(userId);
      return res.status(HttpStatus.OK).json({
        message: 'success',
        data: users,
        statusCode:200
      })
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'A ocurrido un error inesperado',
        statusCode:400
      })
    }
  }

  @Put('edit/:userId')
  async updateUser(@Res() res,@Param('userId') userId, @Body() user): Promise<any> {
    try {
      let users: any = await this.userService.updateUser(user,userId);
      return res.status(HttpStatus.OK).json({
        message: 'success',
        data: users,
        statusCode:200
      })
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'A ocurrido un error inesperado',
        statusCode:400
      })
    }
  }

  @Delete('/:userId')
  async delete(@Res() res,@Param('userId') userId): Promise<any> {
    try {
      let users: Array<any> = await this.userService.deleteUser(userId);
      return res.status(HttpStatus.OK).json({
        message: 'success',
        data: users,
        statusCode:200
      })
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'A ocurrido un error inesperado',
        statusCode:400
      })
    }

  }

}
