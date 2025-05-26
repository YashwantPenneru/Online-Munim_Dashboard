import { Component } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from "./components/layout/header/header.component";
import { CommonModule } from '@angular/common';
import { Task2Component } from './components/task-2/task-2.component';
import { Task3Component } from './components/task-3/task-3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, CommonModule,Task2Component,Task3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(private router : Router){}
  isContentSelected(): boolean {
    return this.router.url !== '/';
  }
}
