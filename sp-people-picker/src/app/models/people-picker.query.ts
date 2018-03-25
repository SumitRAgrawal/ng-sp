export interface PeoplePickerQuery {
  queryParams: PeoplePickerQueryParams;
}

export interface PeoplePickerQueryParams {
  QueryString: string;
  MaximumEntitySuggestions: number;
  AllowEmailAddresses: boolean;
  AllowOnlyEmailAddresses: boolean;
  PrincipalType: number;
  PrincipalSource: number;
  SharePointGroupID: number;
}
