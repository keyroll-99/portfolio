import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {ConsoleService} from "../../services/console.service";
import {ConsolePromtComponent} from "../console-promt/console-promt.component";

@Component({
  selector: 'app-console-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ConsolePromtComponent
  ],
  templateUrl: './console-input.component.html',
  styleUrl: './console-input.component.scss'
})
export class ConsoleInputComponent {
  userInput = new FormControl("")
  @ViewChild("consoleInput", {read:ElementRef}) consoleInput!: ElementRef<HTMLInputElement>;


  constructor(private consoleService: ConsoleService){
  }

  onEnterClick(){
    this.consoleService.runCommand(this.userInput.value!);
    this.userInput.setValue("");
  }

}
