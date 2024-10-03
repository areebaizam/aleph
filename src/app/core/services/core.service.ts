import { inject, Injectable, signal } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/internal/operators/map";
import { shareReplay } from "rxjs/internal/operators/shareReplay";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  isMobile = signal<boolean>(false);
  isSidenavOpen = signal<boolean>(false);
  isSidenavCollapsed = signal<boolean>(false);

  constructor() {
    this.getScreenSize();
  }

  // Media
  private breakpointObserver = inject(BreakpointObserver);

  //https://material.angular.io/cdk/layout/overview
  //XSmall	(max-width: 599.98px)
  private getScreenSize(): void {
    this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .pipe(
        map((result) => result.matches),
        shareReplay(1)
      )
      .subscribe((next) => {
        this.isMobile.set(next);
      });
  }

  toggleSidenavSize(): void {
    this.isSidenavCollapsed.update((state) => !state);
  }

  toggleSidenav(state: boolean): void {
    this.isSidenavOpen.set(state);
  }
}
