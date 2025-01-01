import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
   
    this.userService.currentUsername.subscribe((username) => {
      this.username = username;
    });
  }


  @Output() searchEvent = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    this.searchEvent.emit(searchTerm.trim());
  }
  
}