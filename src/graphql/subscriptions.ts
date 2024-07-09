/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateForm = /* GraphQL */ `subscription OnCreateForm($filter: ModelSubscriptionFormFilterInput) {
  onCreateForm(filter: $filter) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFormSubscriptionVariables,
  APITypes.OnCreateFormSubscription
>;
export const onUpdateForm = /* GraphQL */ `subscription OnUpdateForm($filter: ModelSubscriptionFormFilterInput) {
  onUpdateForm(filter: $filter) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFormSubscriptionVariables,
  APITypes.OnUpdateFormSubscription
>;
export const onDeleteForm = /* GraphQL */ `subscription OnDeleteForm($filter: ModelSubscriptionFormFilterInput) {
  onDeleteForm(filter: $filter) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFormSubscriptionVariables,
  APITypes.OnDeleteFormSubscription
>;
