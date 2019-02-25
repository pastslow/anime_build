import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-section/top-bar/top-bar.component';
import { CenterSectionComponent } from './center-game/center-section/center-section.component';
import { rightCharacterComponent } from './center-game/right-character/right-character.component';
import { CalendarEventsComponent } from './center-game/calendar-events/calendar-events.component';
import { BottomBarComponent } from './bottom-game/bottom-bar/bottom-bar.component';
import { HouseBuildComponent } from './center-game/land-slots/land-slots.component';
import { MoneySectionComponent } from './bottom-game/money-section/money-section.component';
import { MaterialsSectionComponent } from './bottom-game/materials-section/materials-section.component';
import { WorkersSectionComponent } from './bottom-game/workers-section/workers-section.component';
import { EngineersSectionComponent } from './bottom-game/engineers-section/engineers-section.component';
import { SlotActionsComponent } from './misc/slot-actions/slot-actions.component';
import { BuyLandComponent } from './misc/buy-land/buy-land.component';
import { ConstructionDetailsComponent } from './misc/construction-details/construction-details.component';
import { LandBoughtComponent } from './misc/land-bought/land-bought.component';
import { LandEmptyComponent } from './misc/land-empty/land-empty.component';
import { ConstructionActionsComponent } from './misc/construction-actions/construction-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CenterSectionComponent,
    rightCharacterComponent,
    CalendarEventsComponent,
    BottomBarComponent,
    HouseBuildComponent,
    MoneySectionComponent,
    MaterialsSectionComponent,
    WorkersSectionComponent,
    EngineersSectionComponent,
    SlotActionsComponent,
    BuyLandComponent,
    ConstructionDetailsComponent,
    LandBoughtComponent,
    LandEmptyComponent,
    ConstructionActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
