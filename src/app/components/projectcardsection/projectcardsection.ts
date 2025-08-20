import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcardsection',
  imports: [],
  templateUrl: './projectcardsection.html',
  styleUrl: './projectcardsection.css'
})
export class Projectcardsection {
  @Input() title!: string;
  @Input() description!: string;
  @Input() tech!: string;
  @Input() github!: string;
  @Input() demo!: string;
}
