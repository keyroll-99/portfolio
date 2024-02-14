import {Component, Input} from '@angular/core';
import {ConsolePromtComponent} from "../console-promt/console-promt.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-command-result',
  standalone: true,
  imports: [
    ConsolePromtComponent,
    NgForOf
  ],
  templateUrl: './command-result.component.html',
  styleUrl: './command-result.component.scss'
})
export class CommandResultComponent {
  @Input({required: true}) commandResults!: string[];
  @Input({required: true}) command!: string;
}
