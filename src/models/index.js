// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PackageType, Drink, Category } = initSchema(schema);

export {
  PackageType,
  Drink,
  Category
};