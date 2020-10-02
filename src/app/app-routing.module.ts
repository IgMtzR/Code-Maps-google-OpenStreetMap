import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphicsComponent } from './shareds/graphics/graphics.component';
import { HomeComponent } from './shareds/home/home.component';
import { MapsComponent } from './shareds/maps/maps.component';

const routes: Routes = [
  {
    path:'backLog/graphics',
    component: GraphicsComponent
  },
  {
    path:'backLog/maps',
    component: MapsComponent
  },
  {
    path:'backLog',
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/backLog"
  },
  {
    path: "**",
    redirectTo: "/backLog"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
