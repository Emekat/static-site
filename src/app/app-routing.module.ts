import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './media/albums/albums.component';
import { PhotosComponent } from './media/photos/photos.component';

const routes: Routes = [
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
