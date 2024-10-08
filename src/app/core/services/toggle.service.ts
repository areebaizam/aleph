import { computed, Inject, Injectable, signal, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { APP_EVENT_TOGGLE_ICONS } from '@shared/models';
import { eAppEventToggleType, EventToggleModel } from '@shared/models/common.model';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  #toggleIcons = signal<EventToggleModel[]>(APP_EVENT_TOGGLE_ICONS);
  toggleIcons = computed(this.#toggleIcons);
  isSidebarOpen = signal<boolean>(false);

  //TODO: Move this to Document Service
  constructor(@Inject(DOCUMENT) private document: Document) {
    document.addEventListener('fullscreenchange', () => this.updateState(eAppEventToggleType.FULLSCREEN, !!document.fullscreenElement));
    document.addEventListener('keydown', this.onKeydown.bind(this));
  }

  handleToggleEvent(type: eAppEventToggleType, state: boolean): void {
    this.updateState(type, state);
    switch (type) {
      case eAppEventToggleType.SIDENAV:
        this.isSidebarOpen.set(state);
        break;
      case eAppEventToggleType.FULLSCREEN:
        this.toggleFullscreen();
        break;
    }
  }

  private updateState(type: eAppEventToggleType, state: boolean) {
    this.#toggleIcons.update((icons) =>
      icons.map((icon) =>
        icon.type === type ? { ...icon, isActive: state } : icon
      )
    );
  }

  // Enter fullscreen mode
  private toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    }
    else document.exitFullscreen();
  }

  //TODO:BUG Handle F11 full screen 
  private onKeydown($event: KeyboardEvent) {
    $event.stopImmediatePropagation();
    if ($event.key === 'F11') {
      this.updateState(eAppEventToggleType.FULLSCREEN, true);
    }
  }
}
