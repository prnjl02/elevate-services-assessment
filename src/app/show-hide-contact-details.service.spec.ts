import { TestBed } from '@angular/core/testing';

import { ShowHideContactDetailsService } from './show-hide-contact-details.service';

describe('ShowHideContactDetailsService', () => {
  let service: ShowHideContactDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowHideContactDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
