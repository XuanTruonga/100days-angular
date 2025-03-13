import { authors } from './../../contants';
import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponentComponent } from "../../progress-bar-component/progress-bar-component.component";
import { AuthorListComponentComponent } from '../../author/author-list.component/author-list.component.component';
import { AuthorDetaildComponentComponent } from '../../author/author-detaild.component/author-detaild.component.component';

@Component({
  selector: 'header-layout',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, RouterOutlet, ProgressBarComponentComponent,AuthorListComponentComponent,AuthorDetaildComponentComponent],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent {
  @ViewChild(AuthorDetaildComponentComponent) toggle!: AuthorDetaildComponentComponent;
  // @ViewChildren(AuthorDetaildComponentComponent) toggle!: AuthorDetaildComponentComponent;
  // @ViewChild(AuthorDetaildComponentComponent) toggle!: ElementRef<HTMLInputElement>;

  /**
   * @ViewChild dùng để truy xuất một phần tử hoặc một component con duy nhất trong template. Nó chỉ lấy phần tử đầu tiên nếu có nhiều phần tử cùng loại..
   * @ViewChildren dùng để truy xuất nhiều phần tử hoặc component con cùng loại trong template.
      Nó trả về một QueryList<T>, là một danh sách có thể lặp (forEach()).
      Không truy xuất được phần tử tĩnh, chỉ hoạt động khi các phần tử đã được render.
      Khi nào dùng @ViewChildren?
  ✅ Khi cần lấy danh sách nhiều component con.
  ✅ Khi cần thao tác trên nhiều phần tử HTML cùng loại.
  ✅ Khi muốn áp dụng một hành động trên tất cả các phần tử cùng selector.
   * 
   */
  title = '1000s';
  isWarning = false;
  isbgColor = false
  inputType = 'text';
  authors = authors
  checked: boolean = false
  currAuthor = authors[0]
  user = { 
    age: 10,                    
  }
  ngAfterViewInit(){
    if (this.toggle) {
      console.log("ViewChild toggle:", this.toggle);
    }
  }
  callChildMedthod(){
    this.toggle.sayHello()
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
  onSelected(user: any){
    console.log(1);
    this.currAuthor = user
  }
  onDelete(user: any){
    this.authors = this.authors.filter((item:any) => item.id !== user.id)
  }
  onChecked(){
    console.log(4);
    this.checked = !this.checked
    console.log(this.checked);
  }
  tags:string[] = ["typeScrip", "react-js","angular"]
}