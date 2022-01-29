import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryController } from './gallery/gallery.controller';

@Module({
  imports: [],
  controllers: [AppController, GalleryController],
  providers: [AppService],
})
export class AppModule {}
