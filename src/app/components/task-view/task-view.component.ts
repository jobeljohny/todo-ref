import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {
  @Input() task: Task = {
    id: 'asdasd',
    heading: 'Test',
    endDate: Date.now().toString(),
    description: 'sdasdasdasdasfdf jdhf akdjshf ksjdhf laskdjh',
  };

  onMarkClick() {
    if (this.task) {
      this.task.isCompleted = !this.task.isCompleted;
    }
  }
}
