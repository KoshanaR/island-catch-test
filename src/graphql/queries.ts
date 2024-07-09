/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getForm = /* GraphQL */ `query GetForm($id: ID!) {
  getForm(id: $id) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFormQueryVariables, APITypes.GetFormQuery>;
export const listForms = /* GraphQL */ `query ListForms(
  $filter: ModelFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      email
      designation
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFormsQueryVariables, APITypes.ListFormsQuery>;
