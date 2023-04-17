import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/types/modules';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: ITask
  @Output() deletedTask: EventEmitter<number> = new EventEmitter()
  @Output() remindTask: EventEmitter<ITask> = new EventEmitter()

  onDeleteTask(id: number) {
    this.deletedTask.emit(id)
  }

  onRemindTask(task: ITask) {
    this.remindTask.emit(task)
  }
}
