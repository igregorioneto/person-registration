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
  name: any;
  email: any;
  phone: any;
  photoUrl: any;
  profession: any;
  
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
            this.name = person[0].name;
            this.email = person[0].email;
            this.phone = person[0].phone;
            this.photoUrl = person[0].photo_url;
            this.profession = person[0].profession;
        })
  }

  deletePerson() {

  }

  

}