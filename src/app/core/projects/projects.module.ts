import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ImageComponent } from '../../components/image/image.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    CardComponent,
    SpinnerComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
