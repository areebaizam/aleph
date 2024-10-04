import { Routes } from '@angular/router';

// Make the container class default
export const ROUTES: Routes = [
    {
        path: "",
        children: [
            { path: "", loadComponent: () => import('./blog.component') },
            { path: ":id", loadComponent: () => import('./blog-detail/blog-detail.component'), }
        ]
    },
];

export default ROUTES;