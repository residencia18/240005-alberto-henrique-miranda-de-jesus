import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css'],
})
export class CountryFormComponent implements OnInit {
  camposDoForm: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getFirstCountry().subscribe((country) => {
      this.camposDoForm = Object.keys(country).map((key) => {
        return {
          type: 'text',
          nome: key,
          rotulo: key,
        };
      });
    });
  }
}
