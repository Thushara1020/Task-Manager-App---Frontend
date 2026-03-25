import { Component } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { Alltask } from "../../component/alltask/alltask";

@Component({
  selector: 'app-task',
  imports: [Navbar, Alltask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

}
