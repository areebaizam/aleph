import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
//Components
import { BarBottomComponent, BarTopComponent } from '@core/components';
//Services
import { IconService, MediaService, ToggleService } from '@core/services';
//Models
import { eAppEventToggleType } from '@shared/models';

const materialModules = [MatSidenavModule, MatToolbarModule]
const components = [BarBottomComponent, BarTopComponent];

@Component({
  selector: 'tap-sidenav',
  standalone: true,
  imports: [RouterOutlet, ...materialModules, ...components],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  iconService = inject(IconService);
  mediaService = inject(MediaService);
  toggleService = inject(ToggleService);

  sidenavClosed(): void {
    this.toggleService.handleToggleEvent(eAppEventToggleType.SIDENAV, false);
  }
}
