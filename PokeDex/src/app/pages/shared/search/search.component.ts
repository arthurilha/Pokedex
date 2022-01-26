import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public search(value: string): void {
    this.emmitSearch.emit(value);
  }
}

