import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar-component',
  imports: [],
  templateUrl: './progress-bar-component.component.html',
  styleUrl: './progress-bar-component.component.css'
})
export class ProgressBarComponentComponent implements OnInit, OnChanges{
  @Input() progress = 50;
  backgroundColor = '#ccc';
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
