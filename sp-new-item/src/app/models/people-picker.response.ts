export interface PeoplePickerResponse {
  d: PeoplePickerData;
}

interface PeoplePickerData {
  ClientPeoplePickerSearchUser: PeoplePickerUser[];
}

export interface PeoplePickerUser {
  Key: string;
  Description: string;
  DisplayText: string;
  EntityType: string;
  ProviderDisplayName: string;
  ProviderName: string;
  IsResolved: boolean;
  EntityData: PeoplePickerUserEntityData;
  MultipleMatches: any[];
}

export interface PeoplePickerUserEntityData {
  IsAltSecIdPresent: string;
  Title: string;
  Email: string;
  MobilePhone: string;
  ObjectId: string;
  Department: string;
}

export interface FormDigestResponse {
  'odata.metadata': string;
  FormDigestTimeoutSeconds: number;
  FormDigestValue: string;
  LibraryVersion: string;
  SiteFullUrl: string;
  SupportedSchemaVersions: string[];
  WebFullUrl: string;
}
