import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'projects', loadChildren:() => import('./core/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '**', pathMatch:'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
