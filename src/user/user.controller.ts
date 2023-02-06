import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param('id') id: string): Promise<CreateUserDto> {
    return this.userService.findOne(id);
  }

  @Patch(":id")
  async UpdateOne(@Param('id') id: string, @Body() updatedUser: CreateUserDto): Promise<CreateUserDto> {
    return this.userService.updateOne(id, updatedUser);
  }
  @Delete(":id")
  async deleteOne(@Param('id') id: string): Promise<CreateUserDto> {
    return this.userService.deleteOne(id);
  }
}
