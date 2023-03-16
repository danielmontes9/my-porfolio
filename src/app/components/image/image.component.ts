import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image: string = '';
  @Input() customWidth: any;
  @Input() customHeight: any;

  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    this.loading = false;
  }

}
