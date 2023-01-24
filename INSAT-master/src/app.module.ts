import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config' ; 
import { TypeOrmModule} from '@nestjs/typeorm' ; 
import { SuperUsersModule } from './super-users/super-users.module';
import { AvisModule } from './avis/avis.module';
import { CommentsModule } from './comments/comments.module';
import { EmploiesModule } from './emploies/emploies.module';
import { AffichagesModule } from './affichages/affichages.module';
import { CoursesModule } from './courses/courses.module';
import { ContactsModule } from './contacts/contacts.module';
import * as dotenv from 'dotenv';

dotenv.config()

@Module({
  imports: [UsersModule,
    ConfigModule.forRoot({ 
    isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,

    }),
    SuperUsersModule,
    AvisModule,
    CommentsModule,
    EmploiesModule,
    AffichagesModule,
    CoursesModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
