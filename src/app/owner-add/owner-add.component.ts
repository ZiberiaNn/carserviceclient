import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OwnerService } from '../shared/owner/owner.service';


@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm: FormGroup;
  sub: Subscription;
  owner: any = {};

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ownerService: OwnerService,) {
    this.ownerForm = this.fb.group({
      dni: ['', Validators.required],
      profession: ['', Validators.required],
      name: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const href = params['href'];
      console.log(href);
      if (href) {
        this.ownerService.get(href).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner;
            this.owner.href = owner._links.self.href;
          } else {
            console.log(`Owner with href '${href}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save() {
    this.ownerService.save(this.ownerForm.value).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  edit()
  {
    this.ownerService.update(this.owner.href, this.ownerForm.value).subscribe(result => {
      this.router.navigate(['/owner-list']);
    }, error => console.error(error));
  }

}
