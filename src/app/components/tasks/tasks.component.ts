import { Component, OnInit } from '@angular/core';
import { ITask } from '../../types/modules';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = []

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  onDeleteTask(id: number) {
    this.taskService.onDeleteTask(id).subscribe(() => (
      this.tasks = this.tasks.filter((task) => task.id !== id)
    ))
  }

  onRemindTask(task: ITask) {
    task.reminder = !task.reminder
    this.taskService.updateTask(task).subscribe()
  }

  addTask(task: ITask) {
    this.taskService.addTask(task).subscribe((task) => (
      this.tasks.push(task)
    ))
  }

}
