import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getPokemons : any;
  private setPokemons : any;

  constructor( private api : ApiService) { }

  ngOnInit(): void {
    this.api.apiListPokemond.subscribe(
      res => {
        this.setPokemons = res.results
        this.getPokemons = this.setPokemons
      }
    )
  }

  public getSearch(value:string){
    const filter = this.setPokemons.filter( (res: any ) =>{
      return !res.name.indexOf(value.toLowerCase())
    }) 
    this.getPokemons = filter
  }

}
