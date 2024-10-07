import { Injectable, signal } from '@angular/core';
import { eAppEventToggleType, ToggleStateModel } from '@shared/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isSidebarOpen = signal<boolean>(false);
  handleToggleEvent(type: eAppEventToggleType, state: boolean): void {
    switch (type) {
      case eAppEventToggleType.SIDENAV:
        this.isSidebarOpen.set(state);
        break;
    }
  }
}
