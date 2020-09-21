import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto: RestoService) {
  }

  alert: boolean = false;

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  ngOnInit(): void {
  }

  collectData() {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      console.warn(result);
      this.alert = true;
    });
    this.addResto.reset({});
  }

  closeAlert() {
    this.alert = false;

  }
}
