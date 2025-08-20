import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footersection } from "./components/footersection/footersection";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footersection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
