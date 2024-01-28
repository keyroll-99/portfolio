import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-console',
  standalone: true,
  imports: [],
  templateUrl: './app-console.component.html',
  styleUrl: './app-console.component.scss'
})
export class AppConsoleComponent implements OnInit{
  userInput: string = "";
  @ViewChild("input") input!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.input.nativeElement.focus(), 0);
  }

  onConsoleClick() {
    this.input.nativeElement.focus();
  }
}
