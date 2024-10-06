import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {
  public task: Task | null = {
    id: 'asdasd',
    heading: 'Test',
    endDate: Date.now().toString(),
    description: 'sdasdasdasdasfdf jdhf akdjshf ksjdhf laskdjh',
  };
}
