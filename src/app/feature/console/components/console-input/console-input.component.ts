import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-console-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './console-input.component.html',
  styleUrl: './console-input.component.scss'
})
export class ConsoleInputComponent {
  userInput = new FormControl("")

  @Output() inputChange = new EventEmitter<string>();
  @ViewChild("consoleInput", {read:ElementRef}) consoleInput!: ElementRef<HTMLInputElement>;


  constructor(private  formBuilder: FormBuilder) {
  }

  emitInputChange() {
    this.inputChange.emit(this.userInput.value!);
  }

}
