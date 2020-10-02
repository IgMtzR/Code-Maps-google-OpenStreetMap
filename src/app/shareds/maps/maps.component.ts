import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  open(contenido) {
    this.modal.open(contenido, { size: 'lg' })
  }
  open1(contenido) {
    this.modal.open(contenido, { size: 'sm' })
  }
}
