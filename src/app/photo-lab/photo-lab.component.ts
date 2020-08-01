import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-lab',
  templateUrl: './photo-lab.component.html',
  styleUrls: ['./photo-lab.component.css'],
})
export class PhotoLabComponent implements OnInit {
  @Input() url = '';
  @Output() fetchSubmitted = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onFetchClick() {
    this.fetchSubmitted.emit();
  }
}
