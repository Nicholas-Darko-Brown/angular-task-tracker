import { Component, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/types/modules';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter()

  task!: string
  date!: string
  reminder: boolean = false
  showAddTask!: boolean
  subscription!: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  onSubmit() {
    if(!this.task || !this.date) {
      alert("Please, add a task!")
    }

    const newTask = {
      task: this.task,
      date: this.date,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)

    this.task = ''
    this.date = ''
    this.reminder = false
  }

}
