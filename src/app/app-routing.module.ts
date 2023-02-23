import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./composants/accueil/accueil.component";
import {CoComponent} from "./composants/co/co.component";
import {SortiesComponent} from "./composants/sorties/sorties.component";

const routes: Routes = [
  {path: '', redirectTo: '/co', pathMatch: 'full' },
  {path: 'co', component: CoComponent},
  {path: 'sorties', component: SortiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
