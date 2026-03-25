import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}

@Component({
  selector: 'app-tashform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tashform.html',
  styleUrl: './tashform.css',
  providers: [DatePipe]
})
export class Tashform {
  private readonly fb = inject(FormBuilder);

  // Reactive Form Structure
  readonly taskForm = this.fb.group({
    title: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
    description: this.fb.nonNullable.control('', [Validators.required]),
    status: this.fb.control<TaskStatus>('Pending', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
  });

  showModal = false;
  isEditMode = false;
  selectedTaskId: number | null = null;

  // Sample Data
  tasks: Task[] = [
    {
      id: 1,
      title: 'Design Premium UI',
      description: 'Create a glassmorphism navbar and task cards.',
      status: 'Completed',
      createdAt: new Date(),
    },
  ];

  // Modal Open/Edit Logic
  openModal(task?: Task): void {
    this.showModal = true;
    if (!task) {
      this.isEditMode = false;
      this.selectedTaskId = null;
      this.taskForm.reset({ title: '', description: '', status: 'Pending' });
      return;
    }

    this.isEditMode = true;
    this.selectedTaskId = task.id;
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditMode = false;
    this.selectedTaskId = null;
    this.taskForm.reset({ title: '', description: '', status: 'Pending' });
  }

  // Create & Update Logic
  saveTask(): void {
    if (this.taskForm.invalid) return;

    const raw = this.taskForm.getRawValue();

    if (this.isEditMode && this.selectedTaskId !== null) {

      this.tasks = this.tasks.map((task) =>
        task.id === this.selectedTaskId
          ? { ...task, title: raw.title, description: raw.description, status: raw.status }
          : task
      );
    } else {

      const nextId = this.tasks.length ? Math.max(...this.tasks.map((task) => task.id)) + 1 : 1;
      const newTask: Task = {
        id: nextId,
        title: raw.title,
        description: raw.description,
        status: raw.status as TaskStatus,
        createdAt: new Date(),
      };
      this.tasks = [...this.tasks, newTask];
    }

    this.closeModal();
  }


  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      if (this.selectedTaskId === id) {
        this.closeModal();
      }
    }
  }


  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': 
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'In Progress': 
        return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: 
        return 'bg-orange-50 text-orange-600 border-orange-100';
    }
  }
}