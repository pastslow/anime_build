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
import { SlotActionsComponent } from './misc/slot-data/slot-actions/slot-actions.component';
import { BuyLandComponent } from './misc/buy-land/buy-land.component';
import { ConstructionDetailsComponent } from './misc/construction-details/construction-details.component';
import { LandBoughtComponent } from './misc/land-bought/land-bought.component';
import { LandEmptyComponent } from './misc/land-empty/land-empty.component';
import { ConstructionActionsComponent } from './misc/construction-actions/construction-actions.component';
import { ConstructBuildingComponent } from './misc/slot-data/construct-building/construct-building.component';
import { StartGameComponent } from './start-game/start-game.component';
import { StartDataComponent } from './misc/start-data/start-data.component';
import { SelectCharacterComponent } from './misc/select-character/select-character.component';
import { SettingsSectionComponent } from './bottom-game/settings-section/settings-section.component';
import { PopAlertComponent } from './misc/pop-alert/pop-alert.component';
import { ResponsiveMessageComponent } from './misc/responsive-message/responsive-message.component';

import { LogicService } from './logic.service';

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
    SlotActionsComponent,
    BuyLandComponent,
    ConstructionDetailsComponent,
    LandBoughtComponent,
    LandEmptyComponent,
    ConstructionActionsComponent,
    ConstructBuildingComponent,
    StartGameComponent,
    StartDataComponent,
    SelectCharacterComponent,
    SettingsSectionComponent,
    PopAlertComponent,
    ResponsiveMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
