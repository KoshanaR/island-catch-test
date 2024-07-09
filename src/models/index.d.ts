import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Form, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly designation: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Form, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly designation: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Form = LazyLoading extends LazyLoadingDisabled ? EagerForm : LazyForm

export declare const Form: (new (init: ModelInit<Form>) => Form) & {
  copyOf(source: Form, mutator: (draft: MutableModel<Form>) => MutableModel<Form> | void): Form;
}