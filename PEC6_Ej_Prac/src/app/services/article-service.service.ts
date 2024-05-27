import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "./../models/article";

@Injectable({
  providedIn: "root", // REQUERIDO: registrar el servicio a nivel global
})
export class ArticleServiceService {
  private apiUrl = "http://pendiente"; //

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  changeQuantity(
    articleId: number,
    changeInQuantity: number
  ): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${articleId}`, {
      quantity: changeInQuantity,
    });
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }
}
