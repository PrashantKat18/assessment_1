import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProvider } from '../../../../src/app/services/add';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(public addProvider: AddProvider, private router: Router) { }

  ngOnInit() {
    this.getpermission();
  }

  getpermission() {
    if (this.addProvider.isUserLoggedIn == true) {
    } else {
      alert("sorry you can't Access");
      this.router.navigate(['/home']);
    }
  }

}
