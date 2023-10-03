import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/blog'),
    BlogModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
