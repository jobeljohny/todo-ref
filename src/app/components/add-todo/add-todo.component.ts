import { Component } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  taskHeading: string = '';
  taskDescription: string = '';
  taskEndDate: Date = new Date();

  createTask() {
    console.log(this.taskEndDate);

    if (this.taskHeading.trim().length === 0) {
      return;
    }

    // Logic to handle the created task can be added here
    console.log('Task Created:', {
      heading: this.taskHeading,
      description: this.taskDescription,
      endDate: this.taskEndDate,
    });
    this.taskHeading = '';
    this.taskDescription = '';
  }
}
