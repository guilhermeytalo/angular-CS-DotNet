import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../utils/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public forecasts?: WeatherData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.handleGetWeather();
  }


  handleGetWeather = () => {
    this.http.get<WeatherData[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  title = 'angularapp';
}
