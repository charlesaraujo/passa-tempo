import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/tabs/tabs.component.module').then(m => m.TabsPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('../modules/games/components/game.container.module').then(m => m.GameContainerModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
