import { Routes } from '@angular/router';
import { BuilderComponent } from './builder.component';
import { CollectionsComponent } from './collections.component';

export const routes: Routes = [
  { path: '', component: BuilderComponent },
  { path: 'collections', component: CollectionsComponent }
];
