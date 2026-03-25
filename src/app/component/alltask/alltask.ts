import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alltask',
  imports: [DatePipe],
  templateUrl: './alltask.html',
  styleUrl: './alltask.css',
})
export class Alltask {
  tasks = [
  {
    id: 'T-001',
    title: 'Develop Smart ERP Dashboard',
    description: 'Implement real-time revenue tracking and order status animations using Angular and Spring Boot.',
    status: 'In Progress',
    createdAt: new Date()
  },
  {
    id: 'T-002',
    title: 'Cybersecurity Audit',
    description: 'Perform network reconnaissance and vulnerability assessment using Nmap and Metasploit.',
    status: 'Pending',
    createdAt: new Date('2026-03-20')
  },
  {
    id: 'T-003',
    title: 'Flutter Social Media App',
    description: 'Finalize the SQLite DatabaseHelper logic for local post storage and likes tracking.',
    status: 'Completed',
    createdAt: new Date('2026-03-22')
  }
];

}
