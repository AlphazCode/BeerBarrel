import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PackageTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DrinkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PackageType {
  readonly id: string;
  readonly name?: string | null;
  readonly Drinks?: (Drink | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PackageType, PackageTypeMetaData>);
  static copyOf(source: PackageType, mutator: (draft: MutableModel<PackageType, PackageTypeMetaData>) => MutableModel<PackageType, PackageTypeMetaData> | void): PackageType;
}

export declare class Drink {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly volume?: number | null;
  readonly alcohol?: number | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly rating?: number | null;
  readonly packagetypeID: string;
  readonly categoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Drink, DrinkMetaData>);
  static copyOf(source: Drink, mutator: (draft: MutableModel<Drink, DrinkMetaData>) => MutableModel<Drink, DrinkMetaData> | void): Drink;
}

export declare class Category {
  readonly id: string;
  readonly name?: string | null;
  readonly Drinks?: (Drink | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}