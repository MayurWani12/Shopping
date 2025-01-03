import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { AddviewComponent } from "../addview/addview.component";

@Component({
  selector: 'app-h',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent, CommonModule, ProductComponent],
  templateUrl: './h.component.html',
  styleUrl: './h.component.css'
})
export class HComponent implements OnInit {


  searchTerm: string = ''; 

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm; 
  }




  

  ngOnInit() {}
}