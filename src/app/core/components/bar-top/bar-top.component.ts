import { Component, inject, } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToggleService } from '@core/services';
import { BrandComponent, BtnNavigationComponent, IconEventToggleComponent } from '@shared/components';
import { APP_NAV_BTNS, BtnNavModel } from '@shared/models';


const components = [BrandComponent, BtnNavigationComponent, IconEventToggleComponent]
@Component({
  selector: 'tap-bar-top',
  standalone: true,
  imports: [MatToolbarModule, ...components],
  templateUrl: './bar-top.component.html',
  styleUrl: './bar-top.component.scss'
})
export class BarTopComponent {
  data: BtnNavModel[] = APP_NAV_BTNS;//TODO move this to service
  toggleService = inject(ToggleService);
}
