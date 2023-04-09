import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Service
import { ApiService } from './services/api.service';

//Models
import { PositionsComponent } from './services/models/positions.component';

//Componet
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapmodComponent } from './components/mapmod/mapmod.component';
import { Positions } from './services/models/positions';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RutmodComponent } from './components/rutmod/rutmod.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    NavbarComponent,
    MapmodComponent,
    routingComponents,
    RutmodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    ApiService,
    Positions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
