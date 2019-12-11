import {Component, Input, OnInit} from '@angular/core';
import {ThesisService} from '../../services/thesis.service';
import {ThesisSubject} from '../../dto/ThesisSubject';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {delay} from 'q';

@Component({
  selector: 'app-main-panel',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  public allThesis: ThesisSubject[] = [];

  feedback: string;
  constructor(public thesisService: ThesisService,
              public authService: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.thesisService.getAll().subscribe(
      (data) => {
        this.allThesis = data;
      },
    (error) => {
        console.log(error);
      }
    );

  }

  book(thesisSubject: ThesisSubject) {
    const user = this.authService.getUser();
    if (this.allThesis.filter((thesis) => thesis.owner === user).length === 0) {
      thesisSubject.owner = user;
      this.thesisService.add(this.allThesis);
      this.feedback = 'Pomyślnie zarezerwowano';
    } else {
      this.feedback = 'Posiadasz już zarezerwowany temat!';
    }
  }

  isNotBooked(thesis: string) {
    return thesis === 'Nie zarezerwowano';
  }
}
