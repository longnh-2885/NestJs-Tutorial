import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('/')
  listMessages() {
    return ['a', 'b', 'c'];
  }

  @Post('/')
  createMessages() {
    return 'post created';
  }

  @Get('/:id')
  getMessage() {
    return 'a';
  }
}
