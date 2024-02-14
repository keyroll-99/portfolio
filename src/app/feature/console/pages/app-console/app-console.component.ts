import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ConsoleInputComponent} from "../../components/console-input/console-input.component";
import {ConsoleService} from "../../services/console.service";
import {ConsoleAction} from "../../models/console-action";
import {NgForOf} from "@angular/common";
import {CommandResultComponent} from "../../components/command-result/command-result.component";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-app-console',
  standalone: true,
  imports: [
    ConsoleInputComponent,
    NgForOf,
    CommandResultComponent
  ],
  templateUrl: './app-console.component.html',
  styleUrl: './app-console.component.scss'
})
export class AppConsoleComponent implements OnInit{
  consoleHistory: ConsoleAction[] = [];
  @ViewChild(ConsoleInputComponent) input!: ElementRef<ConsoleInputComponent>;

  constructor(private consoleService: ConsoleService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((param: any) => {
      this.route.queryParams.subscribe(params => {

        if (params['query']) {
          this.consoleService.runCommand(params['query']);
        }
      });

    })

  }

  ngOnInit(): void {
    setTimeout(() => this.focusOnConsoleInput(), 0);
    this.consoleService.getConsoleHistory().subscribe((history) => {
      this.consoleHistory = history;
    })
  }

  onConsoleClick() {
    this.focusOnConsoleInput()
  }

  private focusOnConsoleInput() {
    // Here I have to cast to any, because IDK why TS doesn't see properties of ConsoleInputComponent
    (this.input as any).consoleInput.nativeElement.focus()
  }

}
