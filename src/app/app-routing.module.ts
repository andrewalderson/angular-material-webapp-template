import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'people', loadChildren: 'app/pages/people/people.module#PeopleModule' },
  { path: 'documents', loadChildren: 'app/pages/documents/documents.module#DocumentsModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
