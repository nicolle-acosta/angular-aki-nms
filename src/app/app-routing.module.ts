import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path:'inicio',
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path:'control-inventario',
    loadChildren:() => import(`./modules/inventory/inventory.module`).then(m => m.InventoryModule)
  },
  {
    path:'control-pedidos',
    loadChildren:() => import(`./modules/requests/requests.module`).then(m => m.RequestsModule)
  },
  {
    path:'reporte-ventas',
    loadChildren:() => import(`./modules/sales/sales.module`).then(m => m.SalesModule)
  },
  {
    path:'poc',
    loadChildren:() => import(`./modules/po-c/po-c.module`).then(m => m.PoCModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
