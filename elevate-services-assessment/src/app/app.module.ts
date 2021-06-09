import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsListsComponent } from './contacts-lists/contacts-lists.component';
import { SelectedContactComponent } from './selected-contact/selected-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsListsComponent,
    SelectedContactComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
