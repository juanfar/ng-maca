import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-pipe',
  templateUrl: './join-pipe.component.html',
  styleUrls: ['./join-pipe.component.scss']
})
export class JoinPipeComponent implements OnInit {

  valoresNulo = null;
  valores: string[];

  constructor() {
    this.valores = [
      'valor1',
      'valor2',
      'valor3',
      'valor4',
      'valor5',
    ]
  }

  ngOnInit() {
  }

}
