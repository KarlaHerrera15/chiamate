import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotazione } from './model/prenotazione.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chiamate';
  vettPrenotazioni: Prenotazione[] = [];
  o!: Observable<Prenotazione[]>;
  oPost! : Observable<any>;
  postData : any;
  loading: boolean = false;
}
