import { Component, } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrandComponent, BtnNavigationComponent, IconEventToggleComponent } from '@shared/components';
import { BtnNavModel, EventToggleModel, APP_NAV_BTNS, APP_EVENT_TOGGLE_ICONS, eAppEventToggleType } from '@shared/models';


const components = [BrandComponent, BtnNavigationComponent, IconEventToggleComponent]
@Component({
  selector: 'tap-bar-top',
  standalone: true,
  imports: [MatToolbarModule, ...components],
  templateUrl: './bar-top.component.html',
  styleUrl: './bar-top.component.scss'
})
export class BarTopComponent {
  data: BtnNavModel[] = APP_NAV_BTNS;
  icons: EventToggleModel[] = APP_EVENT_TOGGLE_ICONS;
}
