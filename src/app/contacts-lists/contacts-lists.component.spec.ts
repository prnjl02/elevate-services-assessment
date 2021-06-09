import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListsComponent } from './contacts-lists.component';

describe('ContactsListsComponent', () => {
  let component: ContactsListsComponent;
  let fixture: ComponentFixture<ContactsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
