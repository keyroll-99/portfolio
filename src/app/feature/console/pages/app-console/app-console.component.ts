import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConsoleInputComponent} from "../../components/console-input/console-input.component";
import {ConsoleService} from "../../services/console.service";
import {ConsoleAction} from "../../models/console-action";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-app-console',
  standalone: true,
  imports: [
    ConsoleInputComponent,
    NgForOf
  ],
  templateUrl: './app-console.component.html',
  styleUrl: './app-console.component.scss'
})
export class AppConsoleComponent implements OnInit{
  userInput: string = "";
  consoleHistory: ConsoleAction[] = [];
  @ViewChild(ConsoleInputComponent) input!: ElementRef<ConsoleInputComponent>;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    setTimeout(() => this.focusOnConsoleInput(), 0);
  }

  onConsoleClick() {
    this.focusOnConsoleInput()
  }

  onInputChange(inputValue: string){
    console.log(inputValue);
    this.userInput = inputValue;
  }

  onEnterClick(){
    this.consoleService.runCommand(this.userInput);
    this.userInput = "";
  }

  private focusOnConsoleInput() {
    // Here I have to cast to any, because IDK why TS doesn't see properties of ConsoleInputComponent
    (this.input as any).consoleInput.nativeElement.focus()
  }

}