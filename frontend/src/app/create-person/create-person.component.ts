import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePersonService } from '../services/create.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {


  createPersonForm!: FormGroup;
  fileToUpload: File | null = null;
  
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: CreatePersonService
  ){}

  ngOnInit(): void {
    this.createPersonForm = this.formBuilder.group(
        {
          name: new FormControl(
            '',
            Validators.compose([
              Validators.required
            ])
          ),
          email: new FormControl(
            '',
            Validators.compose([
              Validators.required,
              Validators.pattern(
                '^([\\w\\.\\-]+)@([\\w\\-]+)?((\\.(\\w){0,1000}){0,5})()$'
              )
            ]),
          ),
          phone: new FormControl(
            '',
            Validators.compose([
                Validators.required
              ])
          )
        }
      );
  }

  createPerson(person: any) {
    const { name, phone, email } = person;
    let profession_id = 'c51d54b3-2afa-42a8-8d48-88ecede17ff6';
    let file = this.fileToUpload;
    
    this.service.createProfession({
        name, phone, email, profession_id, file
    }).subscribe(() => console.log('sucesso!'));
  }

  openCropperDialog(files: any) {
    this.fileToUpload = files.target.files[0];
  }

  

}