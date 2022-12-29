import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppeeeComponent } from '../appeee/appeee.component';
import { EntryFormComponent } from '../entryform/entry-form/entry-form.component';

const routes: Routes = [
  {
    path: 'appeee',
    component: AppeeeComponent,
  },
  {
    path:'',    
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: EntryFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
