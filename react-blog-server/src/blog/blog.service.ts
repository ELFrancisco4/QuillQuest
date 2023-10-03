import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interface/post.interface'; // Make sure this path is correct
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {} // Use 'postModel' instead of 'Post'

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await new this.postModel(createPostDTO); // Use 'postModel' instead of 'Post'
    return newPost.save();
  }

  async getPost(postID): Promise<Post> {
    const post = await this.postModel.findById(postID).exec(); // Use 'postModel' instead of 'Post'
    return post;
  }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec(); // Use 'postModel' instead of 'Post'
    return posts;
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDTO,
      { new: true },
    ); // Use 'postModel' instead of 'Post'
    return editedPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID); // Use 'postModel' instead of 'Post'
    return deletedPost;
  }
}
