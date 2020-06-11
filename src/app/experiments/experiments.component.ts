import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Mars soil sample', 'Drones', 'Plant growth in habitat', 'Human bone density'];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if(!this.experiments.includes(name)) {
      this.experiments.push(name);
    }
  }

  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(item: string) {
    this.experimentBeingEdited = item;
  }

  save(name: string) {
    let index = this.experiments.indexOf(this.experimentBeingEdited);
    this.experiments[index] = name;
    this.experimentBeingEdited = null;
  }

}
