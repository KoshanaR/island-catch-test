/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createForm = /* GraphQL */ `mutation CreateForm(
  $input: CreateFormInput!
  $condition: ModelFormConditionInput
) {
  createForm(input: $input, condition: $condition) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFormMutationVariables,
  APITypes.CreateFormMutation
>;
export const updateForm = /* GraphQL */ `mutation UpdateForm(
  $input: UpdateFormInput!
  $condition: ModelFormConditionInput
) {
  updateForm(input: $input, condition: $condition) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFormMutationVariables,
  APITypes.UpdateFormMutation
>;
export const deleteForm = /* GraphQL */ `mutation DeleteForm(
  $input: DeleteFormInput!
  $condition: ModelFormConditionInput
) {
  deleteForm(input: $input, condition: $condition) {
    name
    email
    designation
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFormMutationVariables,
  APITypes.DeleteFormMutation
>;
