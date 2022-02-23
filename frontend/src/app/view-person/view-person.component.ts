import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreatePersonService } from '../services/create.service';
import { ViewPersonService } from '../services/view-person.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.scss']
})
export class ViewPersonComponent implements OnInit {

  person: any;
  id: any;
  
  constructor(
    private readonly service: ViewPersonService,
    private readonly route: ActivatedRoute
  ){
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
      this.service.getAllProfessions(this.id)
        .subscribe(person => {
            console.log(person);
        })
  }

  

}