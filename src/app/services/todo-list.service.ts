import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private tasks: Task[] = [];

  constructor() {}

  add(task: Task) {
    this.tasks.push(task);
  }

  getAll() {
    return this.tasks;
  }

  delete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
