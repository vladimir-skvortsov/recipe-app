// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  recipe: (where?: RecipeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  recipe: (where: RecipeWhereUniqueInput) => RecipeNullablePromise;
  recipes: (args?: {
    where?: RecipeWhereInput;
    orderBy?: RecipeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Recipe>;
  recipesConnection: (args?: {
    where?: RecipeWhereInput;
    orderBy?: RecipeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RecipeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRecipe: (data: RecipeCreateInput) => RecipePromise;
  updateRecipe: (args: {
    data: RecipeUpdateInput;
    where: RecipeWhereUniqueInput;
  }) => RecipePromise;
  updateManyRecipes: (args: {
    data: RecipeUpdateManyMutationInput;
    where?: RecipeWhereInput;
  }) => BatchPayloadPromise;
  upsertRecipe: (args: {
    where: RecipeWhereUniqueInput;
    create: RecipeCreateInput;
    update: RecipeUpdateInput;
  }) => RecipePromise;
  deleteRecipe: (where: RecipeWhereUniqueInput) => RecipePromise;
  deleteManyRecipes: (where?: RecipeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  recipe: (
    where?: RecipeSubscriptionWhereInput
  ) => RecipeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RecipeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "poster_ASC"
  | "poster_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface RecipeCreateInput {
  id?: Maybe<ID_Input>;
  poster?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeCreatetagsInput>;
}

export interface RecipeCreatetagsInput {
  set?: Maybe<String[] | String>;
}

export interface RecipeUpdateInput {
  poster?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeUpdatetagsInput>;
}

export interface RecipeUpdatetagsInput {
  set?: Maybe<String[] | String>;
}

export interface RecipeUpdateManyMutationInput {
  poster?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeUpdatetagsInput>;
}

export interface RecipeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  poster?: Maybe<String>;
  poster_not?: Maybe<String>;
  poster_in?: Maybe<String[] | String>;
  poster_not_in?: Maybe<String[] | String>;
  poster_lt?: Maybe<String>;
  poster_lte?: Maybe<String>;
  poster_gt?: Maybe<String>;
  poster_gte?: Maybe<String>;
  poster_contains?: Maybe<String>;
  poster_not_contains?: Maybe<String>;
  poster_starts_with?: Maybe<String>;
  poster_not_starts_with?: Maybe<String>;
  poster_ends_with?: Maybe<String>;
  poster_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<RecipeWhereInput[] | RecipeWhereInput>;
}

export interface RecipeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RecipeWhereInput>;
  AND?: Maybe<RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput>;
}

export type RecipeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface RecipePreviousValues {
  id: ID_Output;
  poster?: String;
  name?: String;
  tags: String[];
}

export interface RecipePreviousValuesPromise
  extends Promise<RecipePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface RecipePreviousValuesSubscription
  extends Promise<AsyncIterator<RecipePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  poster: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
}

export interface AggregateRecipe {
  count: Int;
}

export interface AggregateRecipePromise
  extends Promise<AggregateRecipe>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecipeSubscription
  extends Promise<AsyncIterator<AggregateRecipe>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RecipeEdge {
  node: Recipe;
  cursor: String;
}

export interface RecipeEdgePromise extends Promise<RecipeEdge>, Fragmentable {
  node: <T = RecipePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecipeEdgeSubscription
  extends Promise<AsyncIterator<RecipeEdge>>,
    Fragmentable {
  node: <T = RecipeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType;
  node: Recipe;
  updatedFields: String[];
  previousValues: RecipePreviousValues;
}

export interface RecipeSubscriptionPayloadPromise
  extends Promise<RecipeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecipePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecipePreviousValuesPromise>() => T;
}

export interface RecipeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecipeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecipeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecipePreviousValuesSubscription>() => T;
}

export interface Recipe {
  id: ID_Output;
  poster?: String;
  name?: String;
  tags: String[];
}

export interface RecipePromise extends Promise<Recipe>, Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface RecipeSubscription
  extends Promise<AsyncIterator<Recipe>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  poster: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
}

export interface RecipeNullablePromise
  extends Promise<Recipe | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
}

export interface RecipeConnection {
  pageInfo: PageInfo;
  edges: RecipeEdge[];
}

export interface RecipeConnectionPromise
  extends Promise<RecipeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecipeEdge>>() => T;
  aggregate: <T = AggregateRecipePromise>() => T;
}

export interface RecipeConnectionSubscription
  extends Promise<AsyncIterator<RecipeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecipeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecipeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Recipe",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env['PRISMA_ENDPOINT, "http://localhost:4466"']}`,
  secret: `${process.env['PRISMA_SECRET, ""']}`
});
export const prisma = new Prisma();
