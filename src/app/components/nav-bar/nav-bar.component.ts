import { Component } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  tasks: Task[] = [];
  constructor(private todoService: TodoListService) {
    this.tasks = todoService.getAll();
  }
}
