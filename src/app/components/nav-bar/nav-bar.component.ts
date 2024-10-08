import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  tasks: Task[] = [{heading:'test','description':'this is a test'}];

  constructor() {}

  add(task: Task) {
    this.tasks.push(task);
  }

  onDeleteClicked(id: string) {
    let index = this.tasks.findIndex((task) => task.heading === id);

    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
