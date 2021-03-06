import { Component, OnInit } from 'angular2/core';

import { Loterie } from './../../models';
import { LoterieService } from './../../services';
import { LoterieComponent } from './..';

@Component({
  selector: 'loteries',
  templateUrl: './app/components/loteries/loteries.component.html',
  styleUrls: ['./app/components/loteries/loteries.component.css'],
  providers: [LoterieService],
  directives: [LoterieComponent]
})

//Représente une liste des loteries sur la page d'accueil
export class LoteriesComponent implements OnInit {
  loteries: Loterie[];
  error: any;

  constructor(private service: LoterieService) { }

  //Recupère les loteries à l'initialisation
  ngOnInit(): void {
    this.getLoteries();
  }

  //Retourne les informations sommaires de toutes les loteries
  getLoteries(): void {
    this.service.recuperer()
      .then(loteries => {
        this.loteries = loteries;
      })
      .catch(error => this.error = error);
  }
}
