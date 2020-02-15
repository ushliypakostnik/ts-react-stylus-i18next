import { UtilsType } from './modules/utils/types';
import { TestType } from './modules/test/types';

export interface ObjectOfStringsType {
  readonly [key: string] : string;
};

export interface ObjectOfAnyType {
  readonly [key: string] : any;
};

export interface LanguageObjectType {
  readonly id: number;
  readonly name: string;
};

export interface StoreType {
  readonly rootReducer: {
    readonly utils : UtilsType;
    readonly test : TestType;
  };
  readonly router? : any;
};

// export interface StorageType extends ObjectOfStringsType {};

