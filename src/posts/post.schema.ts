import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { User } from '../users/user.schema';
import { Category } from '../categories/category.schema';
import { Series } from '../series/series.schema';

@Schema()
export class Post {
  @Transform(({ value }) => value.toString())
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({
    required: true,
    set: (content: string) => content.trim(),
  })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  @Type(() => User)
  author: Types.ObjectId | User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Category' }] })
  @Type(() => Category)
  categories: Types.ObjectId[] | Category[];

  @Prop({ type: Types.ObjectId, ref: 'Series' })
  @Type(() => Series)
  series?: Types.ObjectId | Series;
}

export type PostDocument = Post & Document;

const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.index({ title: 'text', content: 'text' });

export { PostSchema };
