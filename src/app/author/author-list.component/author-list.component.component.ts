import { Component } from '@angular/core';
import { AuthorDetaildComponentComponent } from '../author-detaild.component/author-detaild.component.component';

@Component({
  selector: 'app-author-list', 
  standalone: true, 
  imports: [],
  templateUrl: './author-list.component.component.html',
  styleUrl: './author-list.component.component.css'
})
export class AuthorListComponentComponent {
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
