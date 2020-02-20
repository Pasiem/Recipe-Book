import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) { }

  onHeaderClicked(headerInput: HTMLInputElement) {
    //var selection = headerInput.name;
    //if (selection == "recipe") this.router.navigate(['/recipes']);
    //else this.router.navigate(['/shoppinglist']);
  }

  ngOnInit() {
  }

}
