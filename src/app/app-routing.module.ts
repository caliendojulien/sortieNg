import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoComponent} from "./composants/co/co.component";
import {SortiesComponent} from "./composants/sorties/sorties.component";
import {AuthGuard} from "./gardiens/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/co', pathMatch: 'full'},
  {path: 'co', component: CoComponent},
  {
    path: 'sorties',
    component: SortiesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
