import { Component } from '@angular/core';
import { Navbar } from "../../component/navbar/navbar";
import { Tashform } from "../../component/tashform/tashform";

@Component({
  selector: 'app-tast-form',
  imports: [Navbar, Tashform],
  templateUrl: './tast-form.html',
  styleUrl: './tast-form.css',
})
export class TastForm {

}
