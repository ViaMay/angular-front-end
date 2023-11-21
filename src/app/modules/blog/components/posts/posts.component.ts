import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../core/interfaces/post';
import {Router} from '@angular/router';
import {PostsService} from '../../../../core/services/posts.service';
import {MatTableDataSource} from '@angular/material/table';
import {CategoriesService} from "../../../../core/services/categories.service";
import {Category} from "../../../../core/interfaces/category";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public page: number;
  public pageSize = 4;
  public collectionSize: number;

  posts: Post [] = [];
  postsPage: Post [] = [];
  categories: Category [] = [];
  constructor(
    private readonly router: Router,
    private readonly postsService: PostsService,
    private readonly categoriesService: CategoriesService
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.categoriesService.find().subscribe(
      (categories: Category[]) => {
        this.categories = categories
        this.postsService.find().subscribe(
            (posts: Post[]) => {
              this.posts = posts;
              this.collectionSize = this.posts.length;
              this.postsPage = posts.filter((post, i) => i < this.pageSize);
              this.postsPage = this.postsPage.map(post => {
                const category = this.categories.find(category => category.id === post.categoryId);
                if (category) {
                  return { ...post, categoryName: category.name };
                }
                return { ...post, categoryName: post.categoryId };
              });
            }
        );
      }
    );
  }

  onPageChanged(pageNumber: number): void  {
    this.postsPage = this.posts.filter((post, i) => i < this.pageSize * pageNumber && i >=
      this.pageSize * (pageNumber - 1));
    console.log(this.postsPage );
  }

  filterSubject(filterValue: string): void {
    const dataSource =  new MatTableDataSource(this.posts);
    dataSource.filter = filterValue.trim().toLocaleLowerCase();
    console.log(dataSource);
    this.postsPage = [...dataSource.filteredData.values()];
  }
}
