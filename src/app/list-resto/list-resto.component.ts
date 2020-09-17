import {Component, OnInit} from '@angular/core';
import {RestoService} from "../resto.service";

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {
  collection: Object = [];

  constructor(private resto: RestoService) {
  }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

}