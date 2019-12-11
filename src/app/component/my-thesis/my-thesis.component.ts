import { Component, OnInit } from '@angular/core';
import {ThesisSubject} from '../../dto/ThesisSubject';
import {ThesisService} from '../../services/thesis.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-thesis',
  templateUrl: './my-thesis.component.html',
  styleUrls: ['./my-thesis.component.scss']
})
export class MyThesisComponent implements OnInit {

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

  remove(thesisSubject: ThesisSubject) {
    this.thesisService.add(this.allThesis.filter( (thesis) => thesis !== thesisSubject));
    setTimeout( () => {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/mylist']));
    }, 800 );
  }


}
