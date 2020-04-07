import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {Post, PostsService} from "./posts.service";
import {Injectable} from "@angular/core";
import {delay} from "rxjs/operators";

// позволяет загузить данные (Post) до открытия страницы
// пока резолвер не отработает - страница не откроется
@Injectable({providedIn: "root"})
export class PostResolver implements Resolve<Post> {

  constructor(private postService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return of(this.postService.getById(+route.params['id'])) // of - Оборачивает в Obsevable
      .pipe(delay(1500));
  }

}
