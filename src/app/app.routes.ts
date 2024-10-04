import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components';
import { eFeatureRouteURL } from '@shared/models';

export const routes: Routes = [
    {
        path: eFeatureRouteURL.HOME,
        loadChildren: () => import("@features/home/routes"),
    },
    {
        path: eFeatureRouteURL.BLOG,
        loadChildren: () => import("@features/blog/routes"),
    },
    {
        path: "",
        redirectTo: eFeatureRouteURL.HOME,
        pathMatch: "full",
    },
    {
        path: "**",
        component:PageNotFoundComponent
    },
    
];
