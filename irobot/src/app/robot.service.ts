import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Robot } from './robot.model';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  private apiUrl = 'https://localhost:5001/Robots/GetRobotsByCategoryId?categoryId='; 

  constructor(private http: HttpClient) { }

  getRobotsByCategoryId(categoryId: number): Observable<Robot[]> {
    return this.http.get<Robot[]>(this.apiUrl + categoryId);
  }

  getButtonText(): Observable<string> {
    return this.http.get('https://localhost:5001/Robots/GetButtonText', { responseType: 'text' });
  }
}