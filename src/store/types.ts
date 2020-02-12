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
    readonly utils : {
      readonly language : string;
      readonly isAcceptStorageMessage : boolean;
      readonly deviceType : string | null;
    };
  };
  readonly router? : any;
};

// export interface StorageType extends ObjectOfStringsType {};

