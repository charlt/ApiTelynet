import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
@Module({
  //TODO: Variable de entorno db
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b0zy1uh8qfunt8qvlmm4-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u4y8u2vwgqdlnhxj',
      password: 'J0owPdelita0medmiEpd',//'',
      database: 'b0zy1uh8qfunt8qvlmm4',
      entities: [User],
      synchronize: true,
    }),
],
  controllers: [AppController],
  providers: [AppService,UserModule],
})
export class AppModule {}
