import {
  Body,
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDTO } from 'src/shared/dto/account/createAccount.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('all')
  async getAll() {
    try {
      const response = await this.accountService.getAll();
      return response;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch accounts');
    }
  }

  @Post('create')
  async create(@Body() body: CreateAccountDTO) {
    try {
      const response = await this.accountService.create(body);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create account');
    }
  }
}
