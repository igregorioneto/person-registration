import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonService } from '../services/list.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
  persons: any[] = [];

  constructor(
    private readonly service: ListPersonService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.service.getAllProfessions().subscribe(
      async persons => {
        console.log(persons);
        this.persons = persons;
    });
  }

  createProfession() {
    this.router.navigateByUrl('/create');
  }

  

}