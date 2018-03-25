import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';
import { Response } from '@angular/http';
import { SPService } from '../services/sp.service';
import {
  PeoplePickerResponse,
  PeoplePickerUser
} from '../models/people-picker.response';
import { PeoplePickerQuery } from '../models/people-picker.query';

@Component({
  selector: 'app-people-picker',
  templateUrl: './people-picker.component.html',
  styleUrls: ['./people-picker.component.css']
})
export class PeoplePickerComponent implements OnInit {
  constructor(private spService: SPService) {}
  public users: PeoplePickerUser[];
  public multipleUsers: PeoplePickerUser[];
  public BASE_PHOTO_URL: 'https://tenant.sharepoint.com/_layouts/15/userphoto.aspx?size=S&accountname=';
  spuser: PeoplePickerUser;
  spusers: PeoplePickerUser[];

  peoplePickerQuery: PeoplePickerQuery = {
    queryParams: {
      QueryString: '',
      MaximumEntitySuggestions: 10,
      AllowEmailAddresses: true,
      AllowOnlyEmailAddresses: false,
      PrincipalSource: 15,
      PrincipalType: 1,
      SharePointGroupID: 0
    }
  };
  filteredCountriesMultiple: any[];

  filterSPUserSingle(event) {
    this.filterSPUsers(event.query, 'single');
  }

  filterSPUserMultiple(event) {
    this.filterSPUsers(event.query, 'multiple');
  }
  filterSPUsers(query, type) {
    this.peoplePickerQuery = Object.assign({
      queryParams: {
        QueryString: query,
        MaximumEntitySuggestions: 10,
        AllowEmailAddresses: true,
        AllowOnlyEmailAddresses: false,
        PrincipalSource: 15,
        PrincipalType: 1,
        SharePointGroupID: 0
      }
    });

    this.spService
      .getUserSuggestions(this.peoplePickerQuery)
      .subscribe((result: any) => {
        if (type === 'single') {
          this.users = [];
          const allUsers: PeoplePickerUser[] = JSON.parse(
            result.d.ClientPeoplePickerSearchUser
          );
          allUsers.forEach(user => {
            this.users = [...this.users, user];
          });
        } else {
          this.multipleUsers = [];
          const allUsers: PeoplePickerUser[] = JSON.parse(
            result.d.ClientPeoplePickerSearchUser
          );
          allUsers.forEach(user => {
            this.multipleUsers = [...this.multipleUsers, user];
          });
        }
      });
  }

  ngOnInit(): void {
    this.users = [];
    this.multipleUsers = [];
  }
}
