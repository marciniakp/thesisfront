import { Component, OnInit } from '@angular/core';
import {ThesisService} from '../../services/thesis.service';
import {ThesisSubject} from '../../dto/ThesisSubject';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  added = false;
  private allthesis: ThesisSubject[] = [];
  constructor(private thesisService: ThesisService,
              public authService: AuthService) { }

  ngOnInit() {
    this.thesisService.getAll().subscribe(
      (thesis) => {
        this.allthesis = thesis;
      }
    );
  }

  public addSubject(form: NgForm): void {
    const value = form.value;
    const sub = new ThesisSubject(value.topic, value.description.split('\u21b5').join('\n'), this.authService.getUser());

    this.allthesis === null ? this.allthesis = [sub] : this.allthesis.push(sub);
    this.thesisService.add(this.allthesis);

    form.reset();
    this.added = true;
  }
}
