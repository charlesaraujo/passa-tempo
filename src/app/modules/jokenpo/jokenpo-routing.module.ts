import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokenpoContainer } from './container/jokenpo.container';

const routes: Routes = [
  {
    path: '',
    component: JokenpoContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokenpoRoutingModule {}
