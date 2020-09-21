import {Component, OnInit} from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {
  collection: any = [];

  constructor(private resto: RestoService) {
  }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

  // tslint:disable-next-line:typedef
  deleteResto(id) {
    // console.warn(id);
    console.warn(this.collection);
    this.collection.splice(this.collection.findIndex(x => x.id === id), 1);
    this.resto.deleteResto(id).subscribe((result) => {
      console.warn(result);
    });

  }
}
