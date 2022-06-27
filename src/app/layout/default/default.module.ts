import { SharedModule } from './../../shared/shared/shared.module';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { MaterialsModule } from '../../../material/materials/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialsModule,
    SharedModule,
    FlexLayoutModule,
  ],
})
export class DefaultModule {}
