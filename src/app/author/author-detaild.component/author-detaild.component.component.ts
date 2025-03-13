import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author-detaild',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './author-detaild.component.component.html',
  styleUrl: './author-detaild.component.component.css',
})
export class AuthorDetaildComponentComponent implements OnInit {
  @Input() author: any;
  @Input() checked: boolean = false;
  @Output() select = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() toggleChecked = new EventEmitter<any>();
  currentAuthor: any = null;
  toggle: boolean = false;
  ngOnInit() {
    console.log('Author data:', this.author);
  }

  logEvent(user: any) {
    this.select.emit(user);
  }
  logClick() {
    console.log(13);
    this.toggleChecked.emit();
  }
  sayHello() {
    console.log('Hello from Child Component!');
  }
}
