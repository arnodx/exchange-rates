import {HttpParams} from "@angular/common/http";

export const jsonParamsToHttpService = new HttpParams()
  .set('format', 'json');
