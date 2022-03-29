import { BadRequestError } from './../common/bad-request-error';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response) => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post).subscribe({
      next: (response: any) => {
        post.id = response.id;  
      },
      error: (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.json());
        }
        else {
          throw error;
        }
      },
    });
  }
  updatePost(posts: any) {
    let value = { title: 'hello world!!' };
    this.service.update(posts.id, value).subscribe((response) => {
        console.log(response);
      });
  }
  deletePost(post: any) {

    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: () => {
        
      },
      error: (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('This post has already benn deleted.');
        }
        else {
          throw error;
        }
      },
    });
  }
}
