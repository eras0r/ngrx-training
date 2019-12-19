import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducers} from './core.state';
import {EffectsModule} from '@ngrx/effects';
import {coreFeatureEffects} from './core-feature.effects';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot(coreFeatureEffects),
    // use ngrx devtools based on the environment
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class CoreModule {
}
