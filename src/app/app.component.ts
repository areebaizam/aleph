import { Component } from '@angular/core';
import { SidenavComponent } from '@core/components';

@Component({
  selector: 'tap-root',
  standalone: true,
  imports:[SidenavComponent],
  template: `<tap-sidenav></tap-sidenav>`,
})
export class AppComponent {
  title = 'Aleph Lab';
}
