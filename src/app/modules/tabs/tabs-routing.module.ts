import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../games/components/jokenpo/jokenpo.module').then(m => m.JokenpoModule),
    // component: TabsPage,
    // children: [
    //   {
    //     path: 'tab1',
    //     loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
    //   },
    //   {
    //     path: 'games',
    //     loadChildren: () => import('../games/games.module').then(m => m.GamesModule)
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'games',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'game',
    //     redirectTo: 'games',
    //     pathMatch: 'full'
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
