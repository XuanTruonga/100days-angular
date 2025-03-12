import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-author-detaild',
  standalone: true,
  imports: [NgFor],
  templateUrl: './author-detaild.component.component.html',
  styleUrl: './author-detaild.component.component.css',
})
export class AuthorDetaildComponentComponent implements OnInit {
  @Input() author: any;
  @Output() select = new EventEmitter<any>(); 
  currentAuthor: any = null

  ngOnInit() {
    console.log("Author data:", this.author); 
  }

  logEvent(user: any) {
    console.log(1);
    this.select.emit(user);
  }
  
}

