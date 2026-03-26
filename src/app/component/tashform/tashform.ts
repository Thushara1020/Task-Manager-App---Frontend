import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type TaskStatus = 'Pending' | 'In Progress' | 'Completed';
type ApiTaskStatus = 'TO_DO' | 'IN_PROGRESS' | 'DONE';

interface ApiTask {
  id?: number;
  title: string;
  description: string;
  status: ApiTaskStatus;
  createdAt?: Date;
}

interface Task {
  id?: number; 
  title: string;
  description: string;
  status: TaskStatus;
  createdAt?: Date;
}

@Component({
  selector: 'app-tashform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tashform.html',
  styleUrl: './tashform.css',
  providers: [DatePipe]
})
export class Tashform implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/tasks';
  private readonly storageKey = 'task-manager.tasks';

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
  tasks: Task[] = []; 

  private readonly statusToApiMap: Record<TaskStatus, ApiTaskStatus> = {
    Pending: 'TO_DO',
    'In Progress': 'IN_PROGRESS',
    Completed: 'DONE',
  };

  private readonly apiToStatusMap: Record<ApiTaskStatus, TaskStatus> = {
    TO_DO: 'Pending',
    IN_PROGRESS: 'In Progress',
    DONE: 'Completed',
  };

  ngOnInit(): void {
    this.loadCachedTasks();
    this.fetchTasks(); 
  }

  fetchTasks(): void {
    this.http.get<ApiTask[]>(this.apiUrl).subscribe({
      next: (res) => {
        this.tasks = res.map((task) => this.mapApiTaskToUiTask(task));
        this.saveTasksToCache();
      },
      error: (err) => {
        this.loadCachedTasks();
        console.error('Error fetching tasks', err);
      }
    });
  }

  openModal(task?: Task): void {
    this.showModal = true;
    if (!task) {
      this.isEditMode = false;
      this.selectedTaskId = null;
      this.taskForm.reset({ title: '', description: '', status: 'Pending' });
      return;
    }

    this.isEditMode = true;
    this.selectedTaskId = task.id!;
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  }

  saveTask(): void {
    if (this.taskForm.invalid) return;

    const formValue = this.taskForm.getRawValue();
    const taskData: ApiTask = {
      title: formValue.title,
      description: formValue.description,
      status: this.statusToApiMap[formValue.status],
    };

    if (this.isEditMode && this.selectedTaskId !== null) {

      this.http.put<ApiTask>(`${this.apiUrl}/${this.selectedTaskId}`, taskData).subscribe({
        next: () => {
          this.fetchTasks();
          this.closeModal();
        },
        error: (err) => console.error('Update failed', err)
      });
    } else {

      this.http.post<ApiTask>(this.apiUrl, taskData).subscribe({
        next: () => {
          this.fetchTasks(); 
          this.closeModal();
        },
        error: (err) => console.error('Create failed', err)
      });
    }
  }

  deleteTask(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe({
        next: () => {
          this.tasks = this.tasks.filter((t) => t.id !== id);
          this.saveTasksToCache();
          if (this.selectedTaskId === id) this.closeModal();
        },
        error: (err) => console.error('Delete failed', err)
      });
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.isEditMode = false;
    this.selectedTaskId = null;
    this.taskForm.reset();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'In Progress': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: return 'bg-orange-50 text-orange-600 border-orange-100';
    }
  }

  private mapApiTaskToUiTask(task: ApiTask): Task {
    return {
      ...task,
      status: this.apiToStatusMap[task.status] ?? 'Pending',
    };
  }

  private loadCachedTasks(): void {
    const cachedData = localStorage.getItem(this.storageKey);
    if (!cachedData) {
      return;
    }

    try {
      this.tasks = JSON.parse(cachedData);
    } catch {
      localStorage.removeItem(this.storageKey);
    }
  }

  private saveTasksToCache(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }
}