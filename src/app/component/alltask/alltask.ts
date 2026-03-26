import { DatePipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alltask',
  standalone: true,
  imports: [DatePipe, CommonModule], 
  templateUrl: './alltask.html',
  styleUrl: './alltask.css',
})
export class Alltask implements OnInit {
  
  tasks: any[] = []; 
  private apiUrl = 'http://localhost:8080/api/tasks';
  private readonly storageKey = 'task-manager.tasks';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCachedTasks();
    this.loadTasks(); 
  }

  loadTasks() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.tasks = data;
        this.saveTasksToCache(data);
        console.log('Tasks loaded:', data);
      },
      error: (error) => {
        this.loadCachedTasks();
        console.error('Error fetching tasks:', error);
      }
    });
  }

  deleteTask(id: number) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasksToCache(this.tasks);
      });
    }
  }

  openModal(task: any) {
    console.log('Opening task:', task);
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

  private saveTasksToCache(tasks: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}