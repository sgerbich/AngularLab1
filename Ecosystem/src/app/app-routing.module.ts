import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from "./comp-two/comp-two.component"
import { CompOneComponent } from './comp-one/comp-one.component';

const routes: Routes = [
  {path:"comp-one", component: CompOneComponent},
  {path:"comp-two", component: CompTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
