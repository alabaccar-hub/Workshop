import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddVolComponent} from './add-vol/add-vol.component';
import {EditVolComponent} from './edit-vol/edit-vol.component';
import {ViewVolComponent} from './view-vol/view-vol.component';

const routes: Routes = [
  { path: 'addVol',              component: AddVolComponent},
  { path: 'viewVol',              component: ViewVolComponent},
  { path: 'editVol',               component: EditVolComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
