import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FristComponentComponent } from './components/frist-component/frist-component.component';

const routes: Routes = [
  { path: '', component: FristComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
