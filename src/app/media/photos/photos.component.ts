import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photosResult: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPhotos().subscribe(data => {
      this.photosResult = data;
    })
  }

}
