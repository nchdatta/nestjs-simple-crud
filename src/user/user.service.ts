import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './Schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }


  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const user = new this.userModel(createUserDto);
    const result = await user.save();
    return result;
  }

  async findAll(): Promise<CreateUserDto[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOne(id: string): Promise<CreateUserDto> {
    const user = await this.userModel.findById(id, { __v: 0 });
    return user;
  }
  async updateOne(id: string, updateUser: CreateUserDto): Promise<CreateUserDto> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUser, { new: true });
    return user;
  }
  async deleteOne(id: string): Promise<CreateUserDto> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user;
  }
}
