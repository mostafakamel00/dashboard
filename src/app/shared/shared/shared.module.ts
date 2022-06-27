import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MaterialsModule } from '../../../material/materials/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreaComponent } from '../widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from '../widgets/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
  ],
})
export class SharedModule {}
