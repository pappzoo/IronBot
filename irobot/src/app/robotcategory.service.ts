import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RobotCategory } from './robotcategory.model';

@Injectable({
  providedIn: 'root'
})
export class RobotCategoryService {
  private apiUrl = 'https://localhost:5001/Robots/GetCategories'; 

  constructor(private http: HttpClient) { }

  getRobotCategories(): Observable<RobotCategory[]> {
    return this.http.get<RobotCategory[]>(this.apiUrl);
  }
}