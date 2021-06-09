import { Component, OnInit } from '@angular/core';
import { ShowHideContactDetailsService } from '../show-hide-contact-details.service';

@Component({
  selector: 'app-selected-contact',
  templateUrl: './selected-contact.component.html',
  styleUrls: ['./selected-contact.component.scss'],
})
export class SelectedContactComponent implements OnInit {
  dataList = [
    {
      name: 'Steve',
      imgSrc: '../../assets/Images/steve.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Steve Jobs',
    },
    {
      name: 'Zuckerberg',
      imgSrc: '../../assets/Images/zuckerberg.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Mark Zuckerberg',
    },
    {
      name: 'Bill',
      imgSrc: '../../assets/Images/billGates.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Bill Gates',
    },
    {
      name: 'Larry',
      imgSrc: '../../assets/Images/larry.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Larry',
    },
    {
      name: 'Scott',
      imgSrc: '../../assets/Images/scott.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Scott',
    },
    {
      name: 'Barack',
      imgSrc: '../../assets/Images/barack.jpg',
      type: 'Work',
      showMessagePhoneIcons: false,
      fullName: 'Barack Obama',
    },
  ];
  constructor(public showHideService: ShowHideContactDetailsService) {}

  ngOnInit(): void {}
  showContactLists() {
    this.showHideService.isShowContactDetails = false;
  }
}
