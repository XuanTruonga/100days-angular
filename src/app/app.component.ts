import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthorListComponentComponent } from './author/author-list.component/author-list.component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderLayoutComponent,FormsModule,AuthorListComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '100s-day-angular';
}
