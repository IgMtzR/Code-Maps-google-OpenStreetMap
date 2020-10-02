import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shareds/menu/menu.component';
import { GooglemapsComponent } from './maps/googlemaps/googlemaps.component';
import { OpenstreetmapComponent } from './maps/openstreetmap/openstreetmap.component';
import { BarGraphsComponent } from './graphics/bar-graphs/bar-graphs.component';
import { PieChartsGraphsComponent } from './graphics/pie-charts-graphs/pie-charts-graphs.component';
import { HomeComponent } from './shareds/home/home.component';
import { MapsComponent } from './shareds/maps/maps.component';
import { GraphicsComponent } from './shareds/graphics/graphics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GooglemapsComponent,
    OpenstreetmapComponent,
    BarGraphsComponent,
    PieChartsGraphsComponent,
    HomeComponent,
    MapsComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASJRB7Q-zTLhjOz4e6WWSHtKehL8Q92dg',
    libraries: ["places"]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
