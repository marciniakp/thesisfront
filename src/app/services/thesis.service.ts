import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ThesisSubject} from '../dto/ThesisSubject';
import {AuthService} from './auth.service';

@Injectable()
export class ThesisService {

  constructor(public http: HttpClient,
              public authService: AuthService) {}

  getAll(): Observable<ThesisSubject[]> {
    const token = this.authService.getToken();
    return this.http.get<ThesisSubject[]>('https://thesis-a7012.firebaseio.com/thesisList.json?auth=' + token);
  }

  public add(thesisSubject: ThesisSubject[]) {
    const token = this.authService.getToken();
    this.http.put<ThesisSubject[]>('https://thesis-a7012.firebaseio.com/thesisList.json?auth=' + token , thesisSubject).subscribe();
  }

}
