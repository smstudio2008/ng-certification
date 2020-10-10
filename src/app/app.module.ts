import { localStorageSyncReducer, reducers } from './core/state/app.reducer';
import { AppRoutingModule } from "./shared/routes/app-routing.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";

/* Imports - NGRX State Managment */
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MetaReducer, State, StoreModule } from "@ngrx/store";
import { HttpClientModule } from '@angular/common/http';

const environment = {
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [localStorageSyncReducer]
    : [localStorageSyncReducer];
  

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule { }
