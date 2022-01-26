import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private api : ApiService) { }

  ngOnInit(): void {
    this.api.apiListPokemond.subscribe(
      res => console.log(res)
    )
  }

}
