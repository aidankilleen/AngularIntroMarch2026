import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "../navbar-component/navbar-component";

@Component({
  selector: 'app-home-page',
  imports: [NgbAccordionModule, NavbarComponent, NavbarComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
