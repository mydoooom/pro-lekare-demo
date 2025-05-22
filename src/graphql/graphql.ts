/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  contents: Array<Contents>;
  contents_aggregated: Array<Contents_Aggregated>;
  contents_by_id?: Maybe<Contents>;
  contents_by_version?: Maybe<Version_Contents>;
  contents_labels: Array<Contents_Labels>;
  contents_labels_aggregated: Array<Contents_Labels_Aggregated>;
  contents_labels_by_id?: Maybe<Contents_Labels>;
  contents_labels_by_version?: Maybe<Version_Contents_Labels>;
  contents_languages: Array<Contents_Languages>;
  contents_languages_aggregated: Array<Contents_Languages_Aggregated>;
  contents_languages_by_id?: Maybe<Contents_Languages>;
  contents_languages_by_version?: Maybe<Version_Contents_Languages>;
  contents_sections: Array<Contents_Sections>;
  contents_sections_aggregated: Array<Contents_Sections_Aggregated>;
  contents_sections_by_id?: Maybe<Contents_Sections>;
  contents_sections_by_version?: Maybe<Version_Contents_Sections>;
  contents_specializations: Array<Contents_Specializations>;
  contents_specializations_aggregated: Array<Contents_Specializations_Aggregated>;
  contents_specializations_by_id?: Maybe<Contents_Specializations>;
  contents_specializations_by_version?: Maybe<Version_Contents_Specializations>;
  contents_translations: Array<Contents_Translations>;
  contents_translations_aggregated: Array<Contents_Translations_Aggregated>;
  contents_translations_by_id?: Maybe<Contents_Translations>;
  contents_translations_by_version?: Maybe<Version_Contents_Translations>;
  contents_users: Array<Contents_Users>;
  contents_users_aggregated: Array<Contents_Users_Aggregated>;
  contents_users_by_id?: Maybe<Contents_Users>;
  contents_users_by_version?: Maybe<Version_Contents_Users>;
  contents_webs: Array<Contents_Webs>;
  contents_webs_aggregated: Array<Contents_Webs_Aggregated>;
  contents_webs_by_id?: Maybe<Contents_Webs>;
  contents_webs_by_version?: Maybe<Version_Contents_Webs>;
  countries: Array<Countries>;
  countries_aggregated: Array<Countries_Aggregated>;
  countries_by_id?: Maybe<Countries>;
  countries_by_version?: Maybe<Version_Countries>;
  issues: Array<Issues>;
  issues_aggregated: Array<Issues_Aggregated>;
  issues_by_id?: Maybe<Issues>;
  issues_by_version?: Maybe<Version_Issues>;
  issues_translations: Array<Issues_Translations>;
  issues_translations_aggregated: Array<Issues_Translations_Aggregated>;
  issues_translations_by_id?: Maybe<Issues_Translations>;
  issues_translations_by_version?: Maybe<Version_Issues_Translations>;
  journals: Array<Journals>;
  journals_aggregated: Array<Journals_Aggregated>;
  journals_by_id?: Maybe<Journals>;
  journals_by_version?: Maybe<Version_Journals>;
  journals_languages: Array<Journals_Languages>;
  journals_languages_aggregated: Array<Journals_Languages_Aggregated>;
  journals_languages_by_id?: Maybe<Journals_Languages>;
  journals_languages_by_version?: Maybe<Version_Journals_Languages>;
  journals_translations: Array<Journals_Translations>;
  journals_translations_aggregated: Array<Journals_Translations_Aggregated>;
  journals_translations_by_id?: Maybe<Journals_Translations>;
  journals_translations_by_version?: Maybe<Version_Journals_Translations>;
  labels: Array<Labels>;
  labels_aggregated: Array<Labels_Aggregated>;
  labels_by_id?: Maybe<Labels>;
  labels_by_version?: Maybe<Version_Labels>;
  labels_translations: Array<Labels_Translations>;
  labels_translations_aggregated: Array<Labels_Translations_Aggregated>;
  labels_translations_by_id?: Maybe<Labels_Translations>;
  labels_translations_by_version?: Maybe<Version_Labels_Translations>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  languages_by_version?: Maybe<Version_Languages>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  partners: Array<Partners>;
  partners_aggregated: Array<Partners_Aggregated>;
  partners_by_id?: Maybe<Partners>;
  partners_by_version?: Maybe<Version_Partners>;
  sections: Array<Sections>;
  sections_aggregated: Array<Sections_Aggregated>;
  sections_by_id?: Maybe<Sections>;
  sections_by_version?: Maybe<Version_Sections>;
  sections_translations: Array<Sections_Translations>;
  sections_translations_aggregated: Array<Sections_Translations_Aggregated>;
  sections_translations_by_id?: Maybe<Sections_Translations>;
  sections_translations_by_version?: Maybe<Version_Sections_Translations>;
  slots: Array<Slots>;
  slots_aggregated: Array<Slots_Aggregated>;
  slots_by_id?: Maybe<Slots>;
  slots_by_version?: Maybe<Version_Slots>;
  specializations: Array<Specializations>;
  specializations_aggregated: Array<Specializations_Aggregated>;
  specializations_by_id?: Maybe<Specializations>;
  specializations_by_version?: Maybe<Version_Specializations>;
  specializations_translations: Array<Specializations_Translations>;
  specializations_translations_aggregated: Array<Specializations_Translations_Aggregated>;
  specializations_translations_by_id?: Maybe<Specializations_Translations>;
  specializations_translations_by_version?: Maybe<Version_Specializations_Translations>;
  themes: Array<Themes>;
  themes_aggregated: Array<Themes_Aggregated>;
  themes_by_id?: Maybe<Themes>;
  themes_by_version?: Maybe<Version_Themes>;
  themes_partners: Array<Themes_Partners>;
  themes_partners_aggregated: Array<Themes_Partners_Aggregated>;
  themes_partners_by_id?: Maybe<Themes_Partners>;
  themes_partners_by_version?: Maybe<Version_Themes_Partners>;
  themes_translations: Array<Themes_Translations>;
  themes_translations_aggregated: Array<Themes_Translations_Aggregated>;
  themes_translations_by_id?: Maybe<Themes_Translations>;
  themes_translations_by_version?: Maybe<Version_Themes_Translations>;
  themes_translations_partners: Array<Themes_Translations_Partners>;
  themes_translations_partners_aggregated: Array<Themes_Translations_Partners_Aggregated>;
  themes_translations_partners_by_id?: Maybe<Themes_Translations_Partners>;
  themes_translations_partners_by_version?: Maybe<Version_Themes_Translations_Partners>;
  types: Array<Types>;
  types_aggregated: Array<Types_Aggregated>;
  types_by_id?: Maybe<Types>;
  types_by_version?: Maybe<Version_Types>;
  types_translations: Array<Types_Translations>;
  types_translations_aggregated: Array<Types_Translations_Aggregated>;
  types_translations_by_id?: Maybe<Types_Translations>;
  types_translations_by_version?: Maybe<Version_Types_Translations>;
  webs: Array<Webs>;
  webs_aggregated: Array<Webs_Aggregated>;
  webs_by_id?: Maybe<Webs>;
  webs_by_version?: Maybe<Version_Webs>;
  webs_domains: Array<Webs_Domains>;
  webs_domains_aggregated: Array<Webs_Domains_Aggregated>;
  webs_domains_by_id?: Maybe<Webs_Domains>;
  webs_domains_by_version?: Maybe<Version_Webs_Domains>;
};


export type QueryContentsArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_AggregatedArgs = {
  filter?: InputMaybe<Contents_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_LabelsArgs = {
  filter?: InputMaybe<Contents_Labels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Labels_AggregatedArgs = {
  filter?: InputMaybe<Contents_Labels_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Labels_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Labels_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_LanguagesArgs = {
  filter?: InputMaybe<Contents_Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Languages_AggregatedArgs = {
  filter?: InputMaybe<Contents_Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Languages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Languages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_SectionsArgs = {
  filter?: InputMaybe<Contents_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Sections_AggregatedArgs = {
  filter?: InputMaybe<Contents_Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Sections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Sections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_SpecializationsArgs = {
  filter?: InputMaybe<Contents_Specializations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Specializations_AggregatedArgs = {
  filter?: InputMaybe<Contents_Specializations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Specializations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Specializations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_TranslationsArgs = {
  filter?: InputMaybe<Contents_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Translations_AggregatedArgs = {
  filter?: InputMaybe<Contents_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_UsersArgs = {
  filter?: InputMaybe<Contents_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Users_AggregatedArgs = {
  filter?: InputMaybe<Contents_Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Users_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Users_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContents_WebsArgs = {
  filter?: InputMaybe<Contents_Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Webs_AggregatedArgs = {
  filter?: InputMaybe<Contents_Webs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContents_Webs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_Webs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<Countries_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCountries_AggregatedArgs = {
  filter?: InputMaybe<Countries_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCountries_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountries_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryIssuesArgs = {
  filter?: InputMaybe<Issues_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIssues_AggregatedArgs = {
  filter?: InputMaybe<Issues_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIssues_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssues_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryIssues_TranslationsArgs = {
  filter?: InputMaybe<Issues_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIssues_Translations_AggregatedArgs = {
  filter?: InputMaybe<Issues_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryIssues_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssues_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryJournalsArgs = {
  filter?: InputMaybe<Journals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_AggregatedArgs = {
  filter?: InputMaybe<Journals_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJournals_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryJournals_LanguagesArgs = {
  filter?: InputMaybe<Journals_Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_Languages_AggregatedArgs = {
  filter?: InputMaybe<Journals_Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_Languages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJournals_Languages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryJournals_TranslationsArgs = {
  filter?: InputMaybe<Journals_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_Translations_AggregatedArgs = {
  filter?: InputMaybe<Journals_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJournals_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJournals_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLabelsArgs = {
  filter?: InputMaybe<Labels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLabels_AggregatedArgs = {
  filter?: InputMaybe<Labels_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLabels_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLabels_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLabels_TranslationsArgs = {
  filter?: InputMaybe<Labels_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLabels_Translations_AggregatedArgs = {
  filter?: InputMaybe<Labels_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLabels_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLabels_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLanguages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPartnersArgs = {
  filter?: InputMaybe<Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPartners_AggregatedArgs = {
  filter?: InputMaybe<Partners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPartners_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPartners_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySectionsArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_AggregatedArgs = {
  filter?: InputMaybe<Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySections_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySections_TranslationsArgs = {
  filter?: InputMaybe<Sections_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_Translations_AggregatedArgs = {
  filter?: InputMaybe<Sections_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySections_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySections_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySlotsArgs = {
  filter?: InputMaybe<Slots_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySlots_AggregatedArgs = {
  filter?: InputMaybe<Slots_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySlots_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySlots_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySpecializationsArgs = {
  filter?: InputMaybe<Specializations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySpecializations_AggregatedArgs = {
  filter?: InputMaybe<Specializations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySpecializations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpecializations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySpecializations_TranslationsArgs = {
  filter?: InputMaybe<Specializations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySpecializations_Translations_AggregatedArgs = {
  filter?: InputMaybe<Specializations_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySpecializations_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySpecializations_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryThemesArgs = {
  filter?: InputMaybe<Themes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_AggregatedArgs = {
  filter?: InputMaybe<Themes_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThemes_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryThemes_PartnersArgs = {
  filter?: InputMaybe<Themes_Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Partners_AggregatedArgs = {
  filter?: InputMaybe<Themes_Partners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Partners_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThemes_Partners_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryThemes_TranslationsArgs = {
  filter?: InputMaybe<Themes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Translations_AggregatedArgs = {
  filter?: InputMaybe<Themes_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThemes_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryThemes_Translations_PartnersArgs = {
  filter?: InputMaybe<Themes_Translations_Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Translations_Partners_AggregatedArgs = {
  filter?: InputMaybe<Themes_Translations_Partners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryThemes_Translations_Partners_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThemes_Translations_Partners_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTypesArgs = {
  filter?: InputMaybe<Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTypes_AggregatedArgs = {
  filter?: InputMaybe<Types_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTypes_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypes_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTypes_TranslationsArgs = {
  filter?: InputMaybe<Types_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTypes_Translations_AggregatedArgs = {
  filter?: InputMaybe<Types_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTypes_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTypes_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryWebsArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebs_AggregatedArgs = {
  filter?: InputMaybe<Webs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebs_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWebs_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryWebs_DomainsArgs = {
  filter?: InputMaybe<Webs_Domains_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebs_Domains_AggregatedArgs = {
  filter?: InputMaybe<Webs_Domains_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWebs_Domains_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWebs_Domains_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  contents_labels_mutated?: Maybe<Contents_Labels_Mutated>;
  contents_languages_mutated?: Maybe<Contents_Languages_Mutated>;
  contents_mutated?: Maybe<Contents_Mutated>;
  contents_sections_mutated?: Maybe<Contents_Sections_Mutated>;
  contents_specializations_mutated?: Maybe<Contents_Specializations_Mutated>;
  contents_translations_mutated?: Maybe<Contents_Translations_Mutated>;
  contents_users_mutated?: Maybe<Contents_Users_Mutated>;
  contents_webs_mutated?: Maybe<Contents_Webs_Mutated>;
  countries_mutated?: Maybe<Countries_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  issues_mutated?: Maybe<Issues_Mutated>;
  issues_translations_mutated?: Maybe<Issues_Translations_Mutated>;
  journals_languages_mutated?: Maybe<Journals_Languages_Mutated>;
  journals_mutated?: Maybe<Journals_Mutated>;
  journals_translations_mutated?: Maybe<Journals_Translations_Mutated>;
  labels_mutated?: Maybe<Labels_Mutated>;
  labels_translations_mutated?: Maybe<Labels_Translations_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  partners_mutated?: Maybe<Partners_Mutated>;
  sections_mutated?: Maybe<Sections_Mutated>;
  sections_translations_mutated?: Maybe<Sections_Translations_Mutated>;
  slots_mutated?: Maybe<Slots_Mutated>;
  specializations_mutated?: Maybe<Specializations_Mutated>;
  specializations_translations_mutated?: Maybe<Specializations_Translations_Mutated>;
  themes_mutated?: Maybe<Themes_Mutated>;
  themes_partners_mutated?: Maybe<Themes_Partners_Mutated>;
  themes_translations_mutated?: Maybe<Themes_Translations_Mutated>;
  themes_translations_partners_mutated?: Maybe<Themes_Translations_Partners_Mutated>;
  types_mutated?: Maybe<Types_Mutated>;
  types_translations_mutated?: Maybe<Types_Translations_Mutated>;
  webs_domains_mutated?: Maybe<Webs_Domains_Mutated>;
  webs_mutated?: Maybe<Webs_Mutated>;
};


export type SubscriptionContents_Labels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Languages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Sections_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Specializations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContents_Webs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCountries_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionIssues_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionIssues_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionJournals_Languages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionJournals_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionJournals_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLabels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLabels_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPartners_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSections_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSections_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSlots_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSpecializations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSpecializations_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionThemes_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionThemes_Partners_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionThemes_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionThemes_Translations_Partners_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTypes_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTypes_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWebs_Domains_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionWebs_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Contents = {
  children?: Maybe<Array<Maybe<Contents>>>;
  children_func?: Maybe<Count_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  feedbacks?: Maybe<Scalars['String']['output']>;
  feedbacks_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  issue?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Contents_Labels>>>;
  labels_func?: Maybe<Count_Functions>;
  language?: Maybe<Languages>;
  languages?: Maybe<Array<Maybe<Contents_Languages>>>;
  languages_func?: Maybe<Count_Functions>;
  parent?: Maybe<Contents>;
  partner?: Maybe<Partners>;
  public_from?: Maybe<Scalars['Date']['output']>;
  public_from_func?: Maybe<Datetime_Functions>;
  public_till?: Maybe<Scalars['Date']['output']>;
  public_till_func?: Maybe<Datetime_Functions>;
  section?: Maybe<Sections>;
  sections?: Maybe<Array<Maybe<Contents_Sections>>>;
  sections_func?: Maybe<Count_Functions>;
  specializations?: Maybe<Array<Maybe<Contents_Specializations>>>;
  specializations_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Themes>;
  translations?: Maybe<Array<Maybe<Contents_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  type?: Maybe<Types>;
  user_updated?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<Contents_Users>>>;
  users_func?: Maybe<Count_Functions>;
  web?: Maybe<Webs>;
  webs?: Maybe<Array<Maybe<Contents_Webs>>>;
  webs_func?: Maybe<Count_Functions>;
};


export type ContentsChildrenArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsLabelsArgs = {
  filter?: InputMaybe<Contents_Labels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsLanguagesArgs = {
  filter?: InputMaybe<Contents_Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsParentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsPartnerArgs = {
  filter?: InputMaybe<Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsSectionArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsSectionsArgs = {
  filter?: InputMaybe<Contents_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsSpecializationsArgs = {
  filter?: InputMaybe<Contents_Specializations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsThemeArgs = {
  filter?: InputMaybe<Themes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsTranslationsArgs = {
  filter?: InputMaybe<Contents_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsTypeArgs = {
  filter?: InputMaybe<Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsUsersArgs = {
  filter?: InputMaybe<Contents_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsWebArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ContentsWebsArgs = {
  filter?: InputMaybe<Contents_Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Aggregated = {
  count?: Maybe<Contents_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Contents_Aggregated_Count = {
  children?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  feedbacks?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  issue?: Maybe<Scalars['Int']['output']>;
  labels?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  languages?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  partner?: Maybe<Scalars['Int']['output']>;
  public_from?: Maybe<Scalars['Int']['output']>;
  public_till?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
  sections?: Maybe<Scalars['Int']['output']>;
  specializations?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['Int']['output']>;
  webs?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Filter>>>;
  children?: InputMaybe<Contents_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  feedbacks?: InputMaybe<String_Filter_Operators>;
  feedbacks_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  issue?: InputMaybe<String_Filter_Operators>;
  labels?: InputMaybe<Contents_Labels_Filter>;
  labels_func?: InputMaybe<Count_Function_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  languages?: InputMaybe<Contents_Languages_Filter>;
  languages_func?: InputMaybe<Count_Function_Filter_Operators>;
  parent?: InputMaybe<Contents_Filter>;
  partner?: InputMaybe<Partners_Filter>;
  public_from?: InputMaybe<Date_Filter_Operators>;
  public_from_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  public_till?: InputMaybe<Date_Filter_Operators>;
  public_till_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  section?: InputMaybe<Sections_Filter>;
  sections?: InputMaybe<Contents_Sections_Filter>;
  sections_func?: InputMaybe<Count_Function_Filter_Operators>;
  specializations?: InputMaybe<Contents_Specializations_Filter>;
  specializations_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<Themes_Filter>;
  translations?: InputMaybe<Contents_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  type?: InputMaybe<Types_Filter>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Contents_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
  web?: InputMaybe<Webs_Filter>;
  webs?: InputMaybe<Contents_Webs_Filter>;
  webs_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Contents_Labels = {
  content?: Maybe<Contents>;
  id: Scalars['ID']['output'];
  label?: Maybe<Labels>;
};


export type Contents_LabelsContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_LabelsLabelArgs = {
  filter?: InputMaybe<Labels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Labels_Aggregated = {
  count?: Maybe<Contents_Labels_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Labels_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Contents_Labels_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  label?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Labels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Labels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Labels_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  label?: InputMaybe<Labels_Filter>;
};

export type Contents_Labels_Mutated = {
  data?: Maybe<Contents_Labels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Languages = {
  content?: Maybe<Contents>;
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
};


export type Contents_LanguagesContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_LanguagesLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Languages_Aggregated = {
  avg?: Maybe<Contents_Languages_Aggregated_Fields>;
  avgDistinct?: Maybe<Contents_Languages_Aggregated_Fields>;
  count?: Maybe<Contents_Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contents_Languages_Aggregated_Fields>;
  min?: Maybe<Contents_Languages_Aggregated_Fields>;
  sum?: Maybe<Contents_Languages_Aggregated_Fields>;
  sumDistinct?: Maybe<Contents_Languages_Aggregated_Fields>;
};

export type Contents_Languages_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Languages_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Contents_Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Languages_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
};

export type Contents_Languages_Mutated = {
  data?: Maybe<Contents_Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Mutated = {
  data?: Maybe<Contents>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Sections = {
  content?: Maybe<Contents>;
  id: Scalars['ID']['output'];
  section?: Maybe<Sections>;
};


export type Contents_SectionsContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_SectionsSectionArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Sections_Aggregated = {
  count?: Maybe<Contents_Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Contents_Sections_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  section?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Sections_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  section?: InputMaybe<Sections_Filter>;
};

export type Contents_Sections_Mutated = {
  data?: Maybe<Contents_Sections>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Specializations = {
  content?: Maybe<Contents>;
  id: Scalars['ID']['output'];
  specialization?: Maybe<Specializations>;
};


export type Contents_SpecializationsContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_SpecializationsSpecializationArgs = {
  filter?: InputMaybe<Specializations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Specializations_Aggregated = {
  avg?: Maybe<Contents_Specializations_Aggregated_Fields>;
  avgDistinct?: Maybe<Contents_Specializations_Aggregated_Fields>;
  count?: Maybe<Contents_Specializations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Specializations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contents_Specializations_Aggregated_Fields>;
  min?: Maybe<Contents_Specializations_Aggregated_Fields>;
  sum?: Maybe<Contents_Specializations_Aggregated_Fields>;
  sumDistinct?: Maybe<Contents_Specializations_Aggregated_Fields>;
};

export type Contents_Specializations_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  specialization?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Specializations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Contents_Specializations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Specializations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Specializations_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  specialization?: InputMaybe<Specializations_Filter>;
};

export type Contents_Specializations_Mutated = {
  data?: Maybe<Contents_Specializations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Translations = {
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  language?: Maybe<Languages>;
  name: Scalars['String']['output'];
  object?: Maybe<Contents>;
  perex?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type Contents_TranslationsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_TranslationsObjectArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Translations_Aggregated = {
  count?: Maybe<Contents_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Contents_Translations_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
  perex?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Translations_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Contents_Filter>;
  perex?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
};

export type Contents_Translations_Mutated = {
  data?: Maybe<Contents_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Users = {
  content?: Maybe<Contents>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type Contents_UsersContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Users_Aggregated = {
  avg?: Maybe<Contents_Users_Aggregated_Fields>;
  avgDistinct?: Maybe<Contents_Users_Aggregated_Fields>;
  count?: Maybe<Contents_Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contents_Users_Aggregated_Fields>;
  min?: Maybe<Contents_Users_Aggregated_Fields>;
  sum?: Maybe<Contents_Users_Aggregated_Fields>;
  sumDistinct?: Maybe<Contents_Users_Aggregated_Fields>;
};

export type Contents_Users_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Users_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Contents_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Users_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Contents_Users_Mutated = {
  data?: Maybe<Contents_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contents_Webs = {
  content?: Maybe<Contents>;
  id: Scalars['ID']['output'];
  web?: Maybe<Webs>;
};


export type Contents_WebsContentArgs = {
  filter?: InputMaybe<Contents_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contents_WebsWebArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contents_Webs_Aggregated = {
  avg?: Maybe<Contents_Webs_Aggregated_Fields>;
  avgDistinct?: Maybe<Contents_Webs_Aggregated_Fields>;
  count?: Maybe<Contents_Webs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contents_Webs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contents_Webs_Aggregated_Fields>;
  min?: Maybe<Contents_Webs_Aggregated_Fields>;
  sum?: Maybe<Contents_Webs_Aggregated_Fields>;
  sumDistinct?: Maybe<Contents_Webs_Aggregated_Fields>;
};

export type Contents_Webs_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['Int']['output']>;
};

export type Contents_Webs_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Contents_Webs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contents_Webs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contents_Webs_Filter>>>;
  content?: InputMaybe<Contents_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  web?: InputMaybe<Webs_Filter>;
};

export type Contents_Webs_Mutated = {
  data?: Maybe<Contents_Webs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  count?: Maybe<Scalars['Int']['output']>;
};

export type Countries = {
  code: Scalars['ID']['output'];
  code3: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  name: Scalars['String']['output'];
};

export type Countries_Aggregated = {
  count?: Maybe<Countries_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Countries_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Countries_Aggregated_Count = {
  code?: Maybe<Scalars['Int']['output']>;
  code3?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Countries_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Countries_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Countries_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  code3?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Countries_Mutated = {
  data?: Maybe<Countries>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  folder?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Issues = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  issue?: Maybe<Scalars['String']['output']>;
  journal?: Maybe<Journals>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  translations?: Maybe<Array<Maybe<Issues_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  volume?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};


export type IssuesJournalArgs = {
  filter?: InputMaybe<Journals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IssuesTranslationsArgs = {
  filter?: InputMaybe<Issues_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Issues_Aggregated = {
  avg?: Maybe<Issues_Aggregated_Fields>;
  avgDistinct?: Maybe<Issues_Aggregated_Fields>;
  count?: Maybe<Issues_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Issues_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Issues_Aggregated_Fields>;
  min?: Maybe<Issues_Aggregated_Fields>;
  sum?: Maybe<Issues_Aggregated_Fields>;
  sumDistinct?: Maybe<Issues_Aggregated_Fields>;
};

export type Issues_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  issue?: Maybe<Scalars['Int']['output']>;
  journal?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
  volume?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Issues_Aggregated_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

export type Issues_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Issues_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Issues_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  issue?: InputMaybe<String_Filter_Operators>;
  journal?: InputMaybe<Journals_Filter>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  translations?: InputMaybe<Issues_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  volume?: InputMaybe<String_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Issues_Mutated = {
  data?: Maybe<Issues>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Issues_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  object?: Maybe<Issues>;
};


export type Issues_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Issues_TranslationsObjectArgs = {
  filter?: InputMaybe<Issues_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Issues_Translations_Aggregated = {
  avg?: Maybe<Issues_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Issues_Translations_Aggregated_Fields>;
  count?: Maybe<Issues_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Issues_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Issues_Translations_Aggregated_Fields>;
  min?: Maybe<Issues_Translations_Aggregated_Fields>;
  sum?: Maybe<Issues_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Issues_Translations_Aggregated_Fields>;
};

export type Issues_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Issues_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Issues_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Issues_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Issues_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  object?: InputMaybe<Issues_Filter>;
};

export type Issues_Translations_Mutated = {
  data?: Maybe<Issues_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Journals = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  issn?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Languages>;
  languages?: Maybe<Array<Maybe<Journals_Languages>>>;
  languages_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  pubmed_name?: Maybe<Scalars['String']['output']>;
  shortcut: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Journals_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type JournalsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type JournalsLanguagesArgs = {
  filter?: InputMaybe<Journals_Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type JournalsTranslationsArgs = {
  filter?: InputMaybe<Journals_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Journals_Aggregated = {
  count?: Maybe<Journals_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Journals_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Journals_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  issn?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  languages?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  pubmed_name?: Maybe<Scalars['Int']['output']>;
  shortcut?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Journals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Journals_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Journals_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  issn?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  languages?: InputMaybe<Journals_Languages_Filter>;
  languages_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  pubmed_name?: InputMaybe<String_Filter_Operators>;
  shortcut?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Journals_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Journals_Languages = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  object?: Maybe<Journals>;
};


export type Journals_LanguagesLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Journals_LanguagesObjectArgs = {
  filter?: InputMaybe<Journals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Journals_Languages_Aggregated = {
  avg?: Maybe<Journals_Languages_Aggregated_Fields>;
  avgDistinct?: Maybe<Journals_Languages_Aggregated_Fields>;
  count?: Maybe<Journals_Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Journals_Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Journals_Languages_Aggregated_Fields>;
  min?: Maybe<Journals_Languages_Aggregated_Fields>;
  sum?: Maybe<Journals_Languages_Aggregated_Fields>;
  sumDistinct?: Maybe<Journals_Languages_Aggregated_Fields>;
};

export type Journals_Languages_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Journals_Languages_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Journals_Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Journals_Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Journals_Languages_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  object?: InputMaybe<Journals_Filter>;
};

export type Journals_Languages_Mutated = {
  data?: Maybe<Journals_Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Journals_Mutated = {
  data?: Maybe<Journals>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Journals_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Journals>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type Journals_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Journals_TranslationsObjectArgs = {
  filter?: InputMaybe<Journals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Journals_Translations_Aggregated = {
  avg?: Maybe<Journals_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Journals_Translations_Aggregated_Fields>;
  count?: Maybe<Journals_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Journals_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Journals_Translations_Aggregated_Fields>;
  min?: Maybe<Journals_Translations_Aggregated_Fields>;
  sum?: Maybe<Journals_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Journals_Translations_Aggregated_Fields>;
};

export type Journals_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
};

export type Journals_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Journals_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Journals_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Journals_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Journals_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
};

export type Journals_Translations_Mutated = {
  data?: Maybe<Journals_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Labels = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Labels_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type LabelsTranslationsArgs = {
  filter?: InputMaybe<Labels_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Labels_Aggregated = {
  count?: Maybe<Labels_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Labels_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Labels_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Labels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Labels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Labels_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Labels_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Labels_Mutated = {
  data?: Maybe<Labels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Labels_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Labels>;
};


export type Labels_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Labels_TranslationsObjectArgs = {
  filter?: InputMaybe<Labels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Labels_Translations_Aggregated = {
  avg?: Maybe<Labels_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Labels_Translations_Aggregated_Fields>;
  count?: Maybe<Labels_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Labels_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Labels_Translations_Aggregated_Fields>;
  min?: Maybe<Labels_Translations_Aggregated_Fields>;
  sum?: Maybe<Labels_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Labels_Translations_Aggregated_Fields>;
};

export type Labels_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Labels_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Labels_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Labels_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Labels_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Labels_Filter>;
};

export type Labels_Translations_Mutated = {
  data?: Maybe<Labels_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Languages = {
  code: Scalars['ID']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  code?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  direction?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  direction?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Languages_Mutated = {
  data?: Maybe<Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pages = {
  code: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  layout?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  web?: Maybe<Webs>;
};


export type PagesLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PagesWebArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Aggregated = {
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Pages_Aggregated_Count = {
  code?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  layout?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  layout?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  path?: InputMaybe<String_Filter_Operators>;
  web?: InputMaybe<Webs_Filter>;
};

export type Pages_Mutated = {
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Partners = {
  banner?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Directus_Files>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type PartnersBannerArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PartnersLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Partners_Aggregated = {
  count?: Maybe<Partners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Partners_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Partners_Aggregated_Count = {
  banner?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type Partners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Partners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Partners_Filter>>>;
  banner?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
};

export type Partners_Mutated = {
  data?: Maybe<Partners>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Sections = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Sections_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type SectionsTranslationsArgs = {
  filter?: InputMaybe<Sections_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Sections_Aggregated = {
  count?: Maybe<Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Sections_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Sections_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sections_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Sections_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Sections_Mutated = {
  data?: Maybe<Sections>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Sections_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Sections>;
};


export type Sections_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Sections_TranslationsObjectArgs = {
  filter?: InputMaybe<Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Sections_Translations_Aggregated = {
  avg?: Maybe<Sections_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Sections_Translations_Aggregated_Fields>;
  count?: Maybe<Sections_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Sections_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Sections_Translations_Aggregated_Fields>;
  min?: Maybe<Sections_Translations_Aggregated_Fields>;
  sum?: Maybe<Sections_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Sections_Translations_Aggregated_Fields>;
};

export type Sections_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Sections_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Sections_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sections_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sections_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Sections_Filter>;
};

export type Sections_Translations_Mutated = {
  data?: Maybe<Sections_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Slots = {
  adm_id: Scalars['String']['output'];
  adm_slot: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  dimensions?: Maybe<Scalars['JSON']['output']>;
  dimensions_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
};

export type Slots_Aggregated = {
  count?: Maybe<Slots_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Slots_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Slots_Aggregated_Count = {
  adm_id?: Maybe<Scalars['Int']['output']>;
  adm_slot?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  dimensions?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Slots_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Slots_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Slots_Filter>>>;
  adm_id?: InputMaybe<String_Filter_Operators>;
  adm_slot?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  dimensions?: InputMaybe<String_Filter_Operators>;
  dimensions_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
};

export type Slots_Mutated = {
  data?: Maybe<Slots>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Specializations = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations?: Maybe<Array<Maybe<Specializations_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type SpecializationsTranslationsArgs = {
  filter?: InputMaybe<Specializations_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Specializations_Aggregated = {
  count?: Maybe<Specializations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Specializations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Specializations_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Specializations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Specializations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Specializations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  group?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Specializations_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Specializations_Mutated = {
  data?: Maybe<Specializations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Specializations_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Specializations>;
};


export type Specializations_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Specializations_TranslationsObjectArgs = {
  filter?: InputMaybe<Specializations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Specializations_Translations_Aggregated = {
  avg?: Maybe<Specializations_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Specializations_Translations_Aggregated_Fields>;
  count?: Maybe<Specializations_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Specializations_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Specializations_Translations_Aggregated_Fields>;
  min?: Maybe<Specializations_Translations_Aggregated_Fields>;
  sum?: Maybe<Specializations_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Specializations_Translations_Aggregated_Fields>;
};

export type Specializations_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Specializations_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Specializations_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Specializations_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Specializations_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Specializations_Filter>;
};

export type Specializations_Translations_Mutated = {
  data?: Maybe<Specializations_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Themes = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  partners?: Maybe<Array<Maybe<Themes_Partners>>>;
  partners_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Themes_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type ThemesPartnersArgs = {
  filter?: InputMaybe<Themes_Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ThemesTranslationsArgs = {
  filter?: InputMaybe<Themes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Themes_Aggregated = {
  count?: Maybe<Themes_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Themes_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Themes_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  partners?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Themes_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Themes_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Themes_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  partners?: InputMaybe<Themes_Partners_Filter>;
  partners_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Themes_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Themes_Mutated = {
  data?: Maybe<Themes>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Themes_Partners = {
  id: Scalars['ID']['output'];
  partner?: Maybe<Partners>;
  theme?: Maybe<Themes>;
  web?: Maybe<Webs>;
};


export type Themes_PartnersPartnerArgs = {
  filter?: InputMaybe<Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Themes_PartnersThemeArgs = {
  filter?: InputMaybe<Themes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Themes_PartnersWebArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Themes_Partners_Aggregated = {
  count?: Maybe<Themes_Partners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Themes_Partners_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Themes_Partners_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  partner?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['Int']['output']>;
};

export type Themes_Partners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Themes_Partners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Themes_Partners_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  partner?: InputMaybe<Partners_Filter>;
  theme?: InputMaybe<Themes_Filter>;
  web?: InputMaybe<Webs_Filter>;
};

export type Themes_Partners_Mutated = {
  data?: Maybe<Themes_Partners>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Themes_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Themes>;
  partners?: Maybe<Array<Maybe<Themes_Translations_Partners>>>;
  partners_func?: Maybe<Count_Functions>;
};


export type Themes_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Themes_TranslationsObjectArgs = {
  filter?: InputMaybe<Themes_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Themes_TranslationsPartnersArgs = {
  filter?: InputMaybe<Themes_Translations_Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Themes_Translations_Aggregated = {
  avg?: Maybe<Themes_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Themes_Translations_Aggregated_Fields>;
  count?: Maybe<Themes_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Themes_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Themes_Translations_Aggregated_Fields>;
  min?: Maybe<Themes_Translations_Aggregated_Fields>;
  sum?: Maybe<Themes_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Themes_Translations_Aggregated_Fields>;
};

export type Themes_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
  partners?: Maybe<Scalars['Int']['output']>;
};

export type Themes_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Themes_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Themes_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Themes_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Themes_Filter>;
  partners?: InputMaybe<Themes_Translations_Partners_Filter>;
  partners_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Themes_Translations_Mutated = {
  data?: Maybe<Themes_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Themes_Translations_Partners = {
  id: Scalars['ID']['output'];
  partner?: Maybe<Partners>;
  theme?: Maybe<Themes_Translations>;
};


export type Themes_Translations_PartnersPartnerArgs = {
  filter?: InputMaybe<Partners_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Themes_Translations_PartnersThemeArgs = {
  filter?: InputMaybe<Themes_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Themes_Translations_Partners_Aggregated = {
  avg?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
  avgDistinct?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
  count?: Maybe<Themes_Translations_Partners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Themes_Translations_Partners_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
  min?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
  sum?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
  sumDistinct?: Maybe<Themes_Translations_Partners_Aggregated_Fields>;
};

export type Themes_Translations_Partners_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  partner?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['Int']['output']>;
};

export type Themes_Translations_Partners_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  theme?: Maybe<Scalars['Float']['output']>;
};

export type Themes_Translations_Partners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Themes_Translations_Partners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Themes_Translations_Partners_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  partner?: InputMaybe<Partners_Filter>;
  theme?: InputMaybe<Themes_Translations_Filter>;
};

export type Themes_Translations_Partners_Mutated = {
  data?: Maybe<Themes_Translations_Partners>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Types = {
  code?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Array<Maybe<Types_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type TypesTranslationsArgs = {
  filter?: InputMaybe<Types_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Types_Aggregated = {
  avg?: Maybe<Types_Aggregated_Fields>;
  avgDistinct?: Maybe<Types_Aggregated_Fields>;
  count?: Maybe<Types_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Types_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Types_Aggregated_Fields>;
  min?: Maybe<Types_Aggregated_Fields>;
  sum?: Maybe<Types_Aggregated_Fields>;
  sumDistinct?: Maybe<Types_Aggregated_Fields>;
};

export type Types_Aggregated_Count = {
  code?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Types_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Types_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Types_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Types_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Types_Translations_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Types_Mutated = {
  data?: Maybe<Types>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Types_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Languages>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Types>;
};


export type Types_TranslationsLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Types_TranslationsObjectArgs = {
  filter?: InputMaybe<Types_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Types_Translations_Aggregated = {
  avg?: Maybe<Types_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Types_Translations_Aggregated_Fields>;
  count?: Maybe<Types_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Types_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Types_Translations_Aggregated_Fields>;
  min?: Maybe<Types_Translations_Aggregated_Fields>;
  sum?: Maybe<Types_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Types_Translations_Aggregated_Fields>;
};

export type Types_Translations_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  object?: Maybe<Scalars['Int']['output']>;
};

export type Types_Translations_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Types_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Types_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Types_Translations_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  language?: InputMaybe<Languages_Filter>;
  name?: InputMaybe<String_Filter_Operators>;
  object?: InputMaybe<Types_Filter>;
};

export type Types_Translations_Mutated = {
  data?: Maybe<Types_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Version_Contents = {
  children?: Maybe<Scalars['JSON']['output']>;
  children_func?: Maybe<Count_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  feedbacks?: Maybe<Scalars['String']['output']>;
  feedbacks_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  issue?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Scalars['JSON']['output']>;
  labels_func?: Maybe<Count_Functions>;
  language?: Maybe<Scalars['JSON']['output']>;
  languages?: Maybe<Scalars['JSON']['output']>;
  languages_func?: Maybe<Count_Functions>;
  parent?: Maybe<Scalars['JSON']['output']>;
  partner?: Maybe<Scalars['JSON']['output']>;
  public_from?: Maybe<Scalars['Date']['output']>;
  public_from_func?: Maybe<Datetime_Functions>;
  public_till?: Maybe<Scalars['Date']['output']>;
  public_till_func?: Maybe<Datetime_Functions>;
  section?: Maybe<Scalars['JSON']['output']>;
  sections?: Maybe<Scalars['JSON']['output']>;
  sections_func?: Maybe<Count_Functions>;
  specializations?: Maybe<Scalars['JSON']['output']>;
  specializations_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['JSON']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  type?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Scalars['JSON']['output']>;
  users_func?: Maybe<Count_Functions>;
  web?: Maybe<Scalars['JSON']['output']>;
  webs?: Maybe<Scalars['JSON']['output']>;
  webs_func?: Maybe<Count_Functions>;
};

export type Version_Contents_Labels = {
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Contents_Languages = {
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Contents_Sections = {
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  section?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Contents_Specializations = {
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  specialization?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Contents_Translations = {
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  language?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  object?: Maybe<Scalars['JSON']['output']>;
  perex?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Version_Contents_Users = {
  content?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Contents_Webs = {
  content?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  web?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Countries = {
  code: Scalars['ID']['output'];
  code3: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  name: Scalars['String']['output'];
};

export type Version_Issues = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  issue?: Maybe<Scalars['String']['output']>;
  journal?: Maybe<Scalars['JSON']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
  volume?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Version_Issues_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Journals = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  issn?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['JSON']['output']>;
  languages?: Maybe<Scalars['JSON']['output']>;
  languages_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  pubmed_name?: Maybe<Scalars['String']['output']>;
  shortcut: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Journals_Languages = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Journals_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type Version_Labels = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Labels_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Languages = {
  code: Scalars['ID']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  code: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  layout?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  web?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Partners = {
  banner?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Version_Sections = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Sections_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Slots = {
  adm_id: Scalars['String']['output'];
  adm_slot: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  dimensions?: Maybe<Scalars['JSON']['output']>;
  dimensions_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
};

export type Version_Specializations = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Specializations_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Themes = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  partners?: Maybe<Scalars['JSON']['output']>;
  partners_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Themes_Partners = {
  id: Scalars['ID']['output'];
  partner?: Maybe<Scalars['JSON']['output']>;
  theme?: Maybe<Scalars['JSON']['output']>;
  web?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Themes_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
  partners?: Maybe<Scalars['JSON']['output']>;
  partners_func?: Maybe<Count_Functions>;
};

export type Version_Themes_Translations_Partners = {
  id: Scalars['ID']['output'];
  partner?: Maybe<Scalars['JSON']['output']>;
  theme?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Types = {
  code?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  translations_func?: Maybe<Count_Functions>;
};

export type Version_Types_Translations = {
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Webs = {
  color_primary?: Maybe<Scalars['String']['output']>;
  color_secondary?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  default_domain: Scalars['String']['output'];
  default_email: Scalars['String']['output'];
  domains?: Maybe<Scalars['JSON']['output']>;
  domains_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pages?: Maybe<Scalars['JSON']['output']>;
  pages_func?: Maybe<Count_Functions>;
  shortcut?: Maybe<Scalars['String']['output']>;
};

export type Version_Webs_Domains = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['JSON']['output']>;
};

export type Webs = {
  color_primary?: Maybe<Scalars['String']['output']>;
  color_secondary?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  default_domain: Scalars['String']['output'];
  default_email: Scalars['String']['output'];
  domains?: Maybe<Array<Maybe<Webs_Domains>>>;
  domains_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pages?: Maybe<Array<Maybe<Pages>>>;
  pages_func?: Maybe<Count_Functions>;
  shortcut?: Maybe<Scalars['String']['output']>;
};


export type WebsDomainsArgs = {
  filter?: InputMaybe<Webs_Domains_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WebsPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Webs_Aggregated = {
  count?: Maybe<Webs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Webs_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Webs_Aggregated_Count = {
  color_primary?: Maybe<Scalars['Int']['output']>;
  color_secondary?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  default_domain?: Maybe<Scalars['Int']['output']>;
  default_email?: Maybe<Scalars['Int']['output']>;
  domains?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  shortcut?: Maybe<Scalars['Int']['output']>;
};

export type Webs_Domains = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Webs>;
};


export type Webs_DomainsWebArgs = {
  filter?: InputMaybe<Webs_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Webs_Domains_Aggregated = {
  avg?: Maybe<Webs_Domains_Aggregated_Fields>;
  avgDistinct?: Maybe<Webs_Domains_Aggregated_Fields>;
  count?: Maybe<Webs_Domains_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Webs_Domains_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Webs_Domains_Aggregated_Fields>;
  min?: Maybe<Webs_Domains_Aggregated_Fields>;
  sum?: Maybe<Webs_Domains_Aggregated_Fields>;
  sumDistinct?: Maybe<Webs_Domains_Aggregated_Fields>;
};

export type Webs_Domains_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  domain?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  web?: Maybe<Scalars['Int']['output']>;
};

export type Webs_Domains_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Webs_Domains_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Webs_Domains_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Webs_Domains_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  domain?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  web?: InputMaybe<Webs_Filter>;
};

export type Webs_Domains_Mutated = {
  data?: Maybe<Webs_Domains>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Webs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Webs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Webs_Filter>>>;
  color_primary?: InputMaybe<String_Filter_Operators>;
  color_secondary?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  default_domain?: InputMaybe<String_Filter_Operators>;
  default_email?: InputMaybe<String_Filter_Operators>;
  domains?: InputMaybe<Webs_Domains_Filter>;
  domains_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  pages?: InputMaybe<Pages_Filter>;
  pages_func?: InputMaybe<Count_Function_Filter_Operators>;
  shortcut?: InputMaybe<String_Filter_Operators>;
};

export type Webs_Mutated = {
  data?: Maybe<Webs>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type ContentBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  languageCode: Scalars['String']['input'];
}>;


export type ContentBySlugQuery = { contents: Array<{ id: string, labels?: Array<{ label?: { name?: string | null, id: string } | null } | null> | null, translations?: Array<{ name: string, slug?: string | null, perex?: string | null, content?: string | null, language?: { code: string } | null } | null> | null, web?: { shortcut?: string | null } | null }> };

export type ContentsQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type ContentsQuery = { contents: Array<{ id: string, public_from?: any | null, public_till?: any | null, labels?: Array<{ label?: { name?: string | null, id: string } | null } | null> | null, translations?: Array<{ name: string, slug?: string | null, perex?: string | null, language?: { code: string } | null } | null> | null, web?: { shortcut?: string | null } | null }> };


export const ContentBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContentBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"web"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"translations"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"languageCode"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"web"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortcut"}}]}}]}}]}}]} as unknown as DocumentNode<ContentBySlugQuery, ContentBySlugQueryVariables>;
export const ContentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Contents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"cs-CZ","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"ListValue","values":[{"kind":"StringValue","value":"-public_from","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"web"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"code"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"perex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"web"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shortcut"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"PL","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortcut"}}]}},{"kind":"Field","name":{"kind":"Name","value":"public_from"}},{"kind":"Field","name":{"kind":"Name","value":"public_till"}}]}}]}}]} as unknown as DocumentNode<ContentsQuery, ContentsQueryVariables>;