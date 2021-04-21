import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/models/owner';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) { 
    this.ownerForm=this.fb.group({
      dni: ['',Validators.required],
      profesion: ['',Validators.required],
      nombre: ['',Validators.required]

    })
  }

  ngOnInit() {
  }
  addOwner()
  {
    const OWNER: Owner =
    {
      dni: this.ownerForm.get('dni').value,
      profesion: this.ownerForm.get('profesion').value,
      nombre: this.ownerForm.get('nombre').value,

    }
    console.log(OWNER);
    this.router.navigate(['owner-list'])
  }

}
