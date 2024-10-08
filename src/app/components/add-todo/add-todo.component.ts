import { Component, EventEmitter, Output } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { Task } from '../../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  taskHeading: string = '';
  taskDescription: string = '';

  @Output('onAdd') onAdd = new EventEmitter<Task>();

  constructor(
    private todoService: TodoListService,
    private toastr: ToastrService
  ) {}

  createTask() {
    if (this.taskHeading.trim().length === 0) {
      this.toastr.error('Empty heading!');
      return;
    }

    const task: Task = {
      heading: this.taskHeading.trim(),
      description: this.taskDescription,
    };

    this.onAdd.emit(task);
    this.toastr.success(`'${task.heading}' added successfully`);

    // Reset for variables
    this.resetForm();
  }

  resetForm() {
    this.taskHeading = '';
    this.taskDescription = '';
  }
}
