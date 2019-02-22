import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CenterSectionComponent } from './center-section/center-section.component';
import { rightCharacterComponent } from './right-character/right-character.component';
import { CalendarEventsComponent } from './calendar-events/calendar-events.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HouseBuildComponent } from './house-build/house-build.component';
import { MoneySectionComponent } from './money-section/money-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CenterSectionComponent,
    rightCharacterComponent,
    CalendarEventsComponent,
    BottomBarComponent,
    HouseBuildComponent,
    MoneySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
