import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {
  @Input() task!: Task;

  @Output() deleteClicked = new EventEmitter<string>();

  deleteTask() {
    this.deleteClicked.emit(this.task.heading);
  }
}
