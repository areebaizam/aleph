import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ToggleService } from '@core/services';
import { BrandComponent, BtnNavColComponent, IconEventToggleComponent } from '@shared/components';
import { APP_NAV_BTNS, BtnNavModel } from '@shared/models';

const materialModules = [MatToolbarModule, MatTabsModule]
const components = [BrandComponent, BtnNavColComponent, IconEventToggleComponent];
@Component({
  selector: 'tap-bar-bottom',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ...materialModules, ...components],
  templateUrl: './bar-bottom.component.html',
  styleUrl: './bar-bottom.component.scss'
})
export class BarBottomComponent {
  data: BtnNavModel[] = APP_NAV_BTNS;//TODO move this to service
  toggleService = inject(ToggleService);
}
