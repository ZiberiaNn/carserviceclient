import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  constructor(private ownerService: OwnerService,
    private router: Router) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      console.log(this.owners);
    });
  }
  remove(href: string) {
    this.ownerService.remove(href).subscribe(result => {
      this.router.navigate(['/car-list']);
    }, error => console.error(error));
  }

}
