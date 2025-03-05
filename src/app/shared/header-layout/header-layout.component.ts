import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'header-layout',
  imports: [FormsModule,NgIf,NgFor,RouterOutlet],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent {
  title = '1000s';
  inputType = 'text';
  user = { 
    age: 10,
  }
  incrementAge() {
    this.user = {...this.user, age: this.user.age + 1 };
  }
  
  decrementAge() {
    this.user = {...this.user, age: this.user.age - 1 };
  }
  users = [
    {
      name:'user1',
      phone:'0111111111',
      email:'admin11111@gmail.com'
    },
    {
      name:'user2',
      phone:'022222222',
      email:'admin22222@gmail.com'
    },
    {
      name:'user3',
      phone:'033333333',
      email:'admin33333@gmail.com'
    },
    {
      name:'user4',
      phone:'0444444444',
      email:'admin44444@gmail.com'
    },
    {
      name:'user5',
      phone:'0555555555',
      email:'admin5555@gmail.com'
    }
  ]
}