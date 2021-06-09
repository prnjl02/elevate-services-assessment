import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowHideContactDetailsService {
  isShowContactDetails: boolean = false;
  contactFullName: string = '';
  constructor() {}
}
