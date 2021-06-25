import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '../shared/material/material.module';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';
import { CadastroInstutorComponent } from './cadastro-filmes/cadastro-instrutor.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [CadastroInstutorComponent, ListagemFilmesComponent, VisualizarFilmesComponent]
})
export class InstrutorModule { }
