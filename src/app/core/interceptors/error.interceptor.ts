import {HttpErrorResponse, HttpHandler, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor {

  constructor(
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          alert("Nie znaleziono danych");
        }else if(error.status === 400) {
          alert("nieprawidłowe zapytanie");
        }
        return throwError(error);
      })
    );
  }
}
