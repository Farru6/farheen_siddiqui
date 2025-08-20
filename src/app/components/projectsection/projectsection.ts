import { Component, Input } from '@angular/core';
import { Projectcardsection } from "../projectcardsection/projectcardsection";
// import { Projectcardsection } from "../projectcardsection/projectcardsection";

@Component({
  selector: 'app-projectsection',
  imports: [Projectcardsection],
  templateUrl: './projectsection.html',
  styleUrl: './projectsection.css'
})
export class Projectsection {
 @Input() title!: string;
  @Input() description!: string;
  @Input() tech!: string;
  @Input() github!: string;
  @Input() demo!: string;
}
