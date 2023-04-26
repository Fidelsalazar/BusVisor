import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'

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
import { UsermodComponent } from './components/usermod/usermod.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionsComponent,
    NavbarComponent,
    MapmodComponent,
    routingComponents,
    RutmodComponent,
    UsermodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    ApiService,
    Positions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
