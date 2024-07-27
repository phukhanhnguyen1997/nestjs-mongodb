import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import PostsModule from './posts/posts.module';
import { AuthenticationModule } from './authentication/authentication.module';
import CategoriesModule from './categories/categories.module';
import SeriesModule from './series/series.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://phukhanhnguyen1997:zJnbJYui2JTiOehW@cluster0.pb9g6lw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    PostsModule,
    AuthenticationModule,
    CategoriesModule,
    SeriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
