import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'module-one',
    loadChildren: () =>
      import(`./moduleOne/module-one.module`).then((m) => m.ModuleOneModule),
  },
  
  {
    path: 'module-three',
    loadChildren: () =>
      import(`./moduleThree/module-three.module`).then(
        (m) => m.ModuleThreeModule
      ),
  },
  { path: '', redirectTo: 'module-one', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
