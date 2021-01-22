import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './routes/start/start.component';
import { IngameComponent } from './routes/ingame/ingame.component';
import { GlobalVariables } from './global-variables';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'ingame', component: IngameComponent },
  { path: 'ingame/:skipSec', component: IngameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [GlobalVariables],
  exports: [RouterModule],
  bootstrap: [StartComponent]
})
export class AppRoutingModule { }
export const routingComponents = [
  StartComponent, 
  IngameComponent
];
