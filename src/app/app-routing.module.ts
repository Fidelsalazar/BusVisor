import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
//Components
import { RutmodComponent } from './components/rutmod/rutmod.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';

const routes:Routes=[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginComponent},
    {path:'mapmod', component: RutmodComponent},
    {path: 'mapview', component: MapComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [LoginComponent, MapComponent, RutmodComponent]