/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFormInput = {
  name: string,
  email: string,
  designation: string,
  id?: string | null,
};

export type ModelFormConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  and?: Array< ModelFormConditionInput | null > | null,
  or?: Array< ModelFormConditionInput | null > | null,
  not?: ModelFormConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Form = {
  __typename: "Form",
  name: string,
  email: string,
  designation: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFormInput = {
  name?: string | null,
  email?: string | null,
  designation?: string | null,
  id: string,
};

export type DeleteFormInput = {
  id: string,
};

export type ModelFormFilterInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  designation?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFormFilterInput | null > | null,
  or?: Array< ModelFormFilterInput | null > | null,
  not?: ModelFormFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFormConnection = {
  __typename: "ModelFormConnection",
  items:  Array<Form | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFormFilterInput = {
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  designation?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFormFilterInput | null > | null,
  or?: Array< ModelSubscriptionFormFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFormMutationVariables = {
  input: CreateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type CreateFormMutation = {
  createForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormMutationVariables = {
  input: UpdateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type UpdateFormMutation = {
  updateForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormMutationVariables = {
  input: DeleteFormInput,
  condition?: ModelFormConditionInput | null,
};

export type DeleteFormMutation = {
  deleteForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFormQueryVariables = {
  id: string,
};

export type GetFormQuery = {
  getForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms?:  {
    __typename: "ModelFormConnection",
    items:  Array< {
      __typename: "Form",
      name: string,
      email: string,
      designation: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFormSubscriptionVariables = {
  filter?: ModelSubscriptionFormFilterInput | null,
};

export type OnCreateFormSubscription = {
  onCreateForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormSubscriptionVariables = {
  filter?: ModelSubscriptionFormFilterInput | null,
};

export type OnUpdateFormSubscription = {
  onUpdateForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormSubscriptionVariables = {
  filter?: ModelSubscriptionFormFilterInput | null,
};

export type OnDeleteFormSubscription = {
  onDeleteForm?:  {
    __typename: "Form",
    name: string,
    email: string,
    designation: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
