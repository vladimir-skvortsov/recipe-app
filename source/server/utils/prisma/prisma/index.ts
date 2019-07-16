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
  ingredient: (where?: IngredientWhereInput) => Promise<boolean>;
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

  ingredient: (where: IngredientWhereUniqueInput) => IngredientNullablePromise;
  ingredients: (args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Ingredient>;
  ingredientsConnection: (args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => IngredientConnectionPromise;
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

  createIngredient: (data: IngredientCreateInput) => IngredientPromise;
  updateIngredient: (args: {
    data: IngredientUpdateInput;
    where: IngredientWhereUniqueInput;
  }) => IngredientPromise;
  updateManyIngredients: (args: {
    data: IngredientUpdateManyMutationInput;
    where?: IngredientWhereInput;
  }) => BatchPayloadPromise;
  upsertIngredient: (args: {
    where: IngredientWhereUniqueInput;
    create: IngredientCreateInput;
    update: IngredientUpdateInput;
  }) => IngredientPromise;
  deleteIngredient: (where: IngredientWhereUniqueInput) => IngredientPromise;
  deleteManyIngredients: (where?: IngredientWhereInput) => BatchPayloadPromise;
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
  ingredient: (
    where?: IngredientSubscriptionWhereInput
  ) => IngredientSubscriptionPayloadSubscription;
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

export type IngredientEnum = "Item" | "G" | "Ml" | "Tsp" | "Tbsp";

export type IngredientOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "quantity_ASC"
  | "quantity_DESC"
  | "unit_ASC"
  | "unit_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type RecipeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "poster_ASC"
  | "poster_DESC"
  | "posterKey_ASC"
  | "posterKey_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "calories_ASC"
  | "calories_DESC"
  | "protein_ASC"
  | "protein_DESC"
  | "carbohydrates_ASC"
  | "carbohydrates_DESC"
  | "fat_ASC"
  | "fat_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface IngredientUpdateInput {
  recipe?: Maybe<RecipeUpdateOneRequiredWithoutIngredientsInput>;
  name?: Maybe<String>;
  quantity?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
}

export type IngredientWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RecipeUpdatetagsInput {
  set?: Maybe<String[] | String>;
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
  posterKey?: Maybe<String>;
  posterKey_not?: Maybe<String>;
  posterKey_in?: Maybe<String[] | String>;
  posterKey_not_in?: Maybe<String[] | String>;
  posterKey_lt?: Maybe<String>;
  posterKey_lte?: Maybe<String>;
  posterKey_gt?: Maybe<String>;
  posterKey_gte?: Maybe<String>;
  posterKey_contains?: Maybe<String>;
  posterKey_not_contains?: Maybe<String>;
  posterKey_starts_with?: Maybe<String>;
  posterKey_not_starts_with?: Maybe<String>;
  posterKey_ends_with?: Maybe<String>;
  posterKey_not_ends_with?: Maybe<String>;
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
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  ingredients_some?: Maybe<IngredientWhereInput>;
  calories?: Maybe<Int>;
  calories_not?: Maybe<Int>;
  calories_in?: Maybe<Int[] | Int>;
  calories_not_in?: Maybe<Int[] | Int>;
  calories_lt?: Maybe<Int>;
  calories_lte?: Maybe<Int>;
  calories_gt?: Maybe<Int>;
  calories_gte?: Maybe<Int>;
  protein?: Maybe<Int>;
  protein_not?: Maybe<Int>;
  protein_in?: Maybe<Int[] | Int>;
  protein_not_in?: Maybe<Int[] | Int>;
  protein_lt?: Maybe<Int>;
  protein_lte?: Maybe<Int>;
  protein_gt?: Maybe<Int>;
  protein_gte?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  carbohydrates_not?: Maybe<Int>;
  carbohydrates_in?: Maybe<Int[] | Int>;
  carbohydrates_not_in?: Maybe<Int[] | Int>;
  carbohydrates_lt?: Maybe<Int>;
  carbohydrates_lte?: Maybe<Int>;
  carbohydrates_gt?: Maybe<Int>;
  carbohydrates_gte?: Maybe<Int>;
  fat?: Maybe<Int>;
  fat_not?: Maybe<Int>;
  fat_in?: Maybe<Int[] | Int>;
  fat_not_in?: Maybe<Int[] | Int>;
  fat_lt?: Maybe<Int>;
  fat_lte?: Maybe<Int>;
  fat_gt?: Maybe<Int>;
  fat_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<RecipeWhereInput[] | RecipeWhereInput>;
}

export interface RecipeCreateInput {
  id?: Maybe<ID_Input>;
  poster?: Maybe<String>;
  posterKey?: Maybe<String>;
  name: String;
  tags?: Maybe<RecipeCreatetagsInput>;
  description?: Maybe<String>;
  ingredients?: Maybe<IngredientCreateManyWithoutRecipeInput>;
  directions?: Maybe<RecipeCreatedirectionsInput>;
  calories?: Maybe<Int>;
  protein?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  fat?: Maybe<Int>;
}

export interface RecipeUpdatedirectionsInput {
  set?: Maybe<String[] | String>;
}

export interface IngredientCreateInput {
  id?: Maybe<ID_Input>;
  recipe: RecipeCreateOneWithoutIngredientsInput;
  name: String;
  quantity: Float;
  unit: IngredientEnum;
}

export interface RecipeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RecipeWhereInput>;
  AND?: Maybe<RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput>;
}

export interface RecipeCreateOneWithoutIngredientsInput {
  create?: Maybe<RecipeCreateWithoutIngredientsInput>;
  connect?: Maybe<RecipeWhereUniqueInput>;
}

export interface RecipeUpdateManyMutationInput {
  poster?: Maybe<String>;
  posterKey?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeUpdatetagsInput>;
  description?: Maybe<String>;
  directions?: Maybe<RecipeUpdatedirectionsInput>;
  calories?: Maybe<Int>;
  protein?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  fat?: Maybe<Int>;
}

export interface RecipeCreateWithoutIngredientsInput {
  id?: Maybe<ID_Input>;
  poster?: Maybe<String>;
  posterKey?: Maybe<String>;
  name: String;
  tags?: Maybe<RecipeCreatetagsInput>;
  description?: Maybe<String>;
  directions?: Maybe<RecipeCreatedirectionsInput>;
  calories?: Maybe<Int>;
  protein?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  fat?: Maybe<Int>;
}

export interface IngredientUpdateManyWithWhereNestedInput {
  where: IngredientScalarWhereInput;
  data: IngredientUpdateManyDataInput;
}

export interface RecipeCreatetagsInput {
  set?: Maybe<String[] | String>;
}

export type RecipeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RecipeCreatedirectionsInput {
  set?: Maybe<String[] | String>;
}

export interface IngredientUpdateWithoutRecipeDataInput {
  name?: Maybe<String>;
  quantity?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
}

export interface RecipeUpdateInput {
  poster?: Maybe<String>;
  posterKey?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeUpdatetagsInput>;
  description?: Maybe<String>;
  ingredients?: Maybe<IngredientUpdateManyWithoutRecipeInput>;
  directions?: Maybe<RecipeUpdatedirectionsInput>;
  calories?: Maybe<Int>;
  protein?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  fat?: Maybe<Int>;
}

export interface IngredientUpdateManyWithoutRecipeInput {
  create?: Maybe<
    IngredientCreateWithoutRecipeInput[] | IngredientCreateWithoutRecipeInput
  >;
  delete?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  connect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  set?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  disconnect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  update?: Maybe<
    | IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    | IngredientUpdateWithWhereUniqueWithoutRecipeInput
  >;
  upsert?: Maybe<
    | IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    | IngredientUpsertWithWhereUniqueWithoutRecipeInput
  >;
  deleteMany?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  updateMany?: Maybe<
    | IngredientUpdateManyWithWhereNestedInput[]
    | IngredientUpdateManyWithWhereNestedInput
  >;
}

export interface RecipeUpdateOneRequiredWithoutIngredientsInput {
  create?: Maybe<RecipeCreateWithoutIngredientsInput>;
  update?: Maybe<RecipeUpdateWithoutIngredientsDataInput>;
  upsert?: Maybe<RecipeUpsertWithoutIngredientsInput>;
  connect?: Maybe<RecipeWhereUniqueInput>;
}

export interface IngredientSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<IngredientWhereInput>;
  AND?: Maybe<
    IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  >;
}

export interface RecipeUpdateWithoutIngredientsDataInput {
  poster?: Maybe<String>;
  posterKey?: Maybe<String>;
  name?: Maybe<String>;
  tags?: Maybe<RecipeUpdatetagsInput>;
  description?: Maybe<String>;
  directions?: Maybe<RecipeUpdatedirectionsInput>;
  calories?: Maybe<Int>;
  protein?: Maybe<Int>;
  carbohydrates?: Maybe<Int>;
  fat?: Maybe<Int>;
}

export interface IngredientScalarWhereInput {
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
  quantity?: Maybe<Float>;
  quantity_not?: Maybe<Float>;
  quantity_in?: Maybe<Float[] | Float>;
  quantity_not_in?: Maybe<Float[] | Float>;
  quantity_lt?: Maybe<Float>;
  quantity_lte?: Maybe<Float>;
  quantity_gt?: Maybe<Float>;
  quantity_gte?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
  unit_not?: Maybe<IngredientEnum>;
  unit_in?: Maybe<IngredientEnum[] | IngredientEnum>;
  unit_not_in?: Maybe<IngredientEnum[] | IngredientEnum>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  OR?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  NOT?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
}

export interface IngredientUpdateManyMutationInput {
  name?: Maybe<String>;
  quantity?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
}

export interface RecipeUpsertWithoutIngredientsInput {
  update: RecipeUpdateWithoutIngredientsDataInput;
  create: RecipeCreateWithoutIngredientsInput;
}

export interface IngredientCreateManyWithoutRecipeInput {
  create?: Maybe<
    IngredientCreateWithoutRecipeInput[] | IngredientCreateWithoutRecipeInput
  >;
  connect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
}

export interface IngredientCreateWithoutRecipeInput {
  id?: Maybe<ID_Input>;
  name: String;
  quantity: Float;
  unit: IngredientEnum;
}

export interface IngredientUpsertWithWhereUniqueWithoutRecipeInput {
  where: IngredientWhereUniqueInput;
  update: IngredientUpdateWithoutRecipeDataInput;
  create: IngredientCreateWithoutRecipeInput;
}

export interface IngredientUpdateManyDataInput {
  name?: Maybe<String>;
  quantity?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
}

export interface IngredientWhereInput {
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
  recipe?: Maybe<RecipeWhereInput>;
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
  quantity?: Maybe<Float>;
  quantity_not?: Maybe<Float>;
  quantity_in?: Maybe<Float[] | Float>;
  quantity_not_in?: Maybe<Float[] | Float>;
  quantity_lt?: Maybe<Float>;
  quantity_lte?: Maybe<Float>;
  quantity_gt?: Maybe<Float>;
  quantity_gte?: Maybe<Float>;
  unit?: Maybe<IngredientEnum>;
  unit_not?: Maybe<IngredientEnum>;
  unit_in?: Maybe<IngredientEnum[] | IngredientEnum>;
  unit_not_in?: Maybe<IngredientEnum[] | IngredientEnum>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<IngredientWhereInput[] | IngredientWhereInput>;
}

export interface IngredientUpdateWithWhereUniqueWithoutRecipeInput {
  where: IngredientWhereUniqueInput;
  data: IngredientUpdateWithoutRecipeDataInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface RecipePreviousValues {
  id: ID_Output;
  poster?: String;
  posterKey?: String;
  name: String;
  tags: String[];
  description?: String;
  directions: String[];
  calories?: Int;
  protein?: Int;
  carbohydrates?: Int;
  fat?: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface RecipePreviousValuesPromise
  extends Promise<RecipePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  posterKey: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
  description: () => Promise<String>;
  directions: () => Promise<String[]>;
  calories: () => Promise<Int>;
  protein: () => Promise<Int>;
  carbohydrates: () => Promise<Int>;
  fat: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface RecipePreviousValuesSubscription
  extends Promise<AsyncIterator<RecipePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  poster: () => Promise<AsyncIterator<String>>;
  posterKey: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
  description: () => Promise<AsyncIterator<String>>;
  directions: () => Promise<AsyncIterator<String[]>>;
  calories: () => Promise<AsyncIterator<Int>>;
  protein: () => Promise<AsyncIterator<Int>>;
  carbohydrates: () => Promise<AsyncIterator<Int>>;
  fat: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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

export interface IngredientConnection {
  pageInfo: PageInfo;
  edges: IngredientEdge[];
}

export interface IngredientConnectionPromise
  extends Promise<IngredientConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<IngredientEdge>>() => T;
  aggregate: <T = AggregateIngredientPromise>() => T;
}

export interface IngredientConnectionSubscription
  extends Promise<AsyncIterator<IngredientConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<IngredientEdgeSubscription>>>() => T;
  aggregate: <T = AggregateIngredientSubscription>() => T;
}

export interface Recipe {
  id: ID_Output;
  poster?: String;
  posterKey?: String;
  name: String;
  tags: String[];
  description?: String;
  directions: String[];
  calories?: Int;
  protein?: Int;
  carbohydrates?: Int;
  fat?: Int;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface RecipePromise extends Promise<Recipe>, Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  posterKey: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
  description: () => Promise<String>;
  ingredients: <T = FragmentableArray<Ingredient>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  directions: () => Promise<String[]>;
  calories: () => Promise<Int>;
  protein: () => Promise<Int>;
  carbohydrates: () => Promise<Int>;
  fat: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface RecipeSubscription
  extends Promise<AsyncIterator<Recipe>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  poster: () => Promise<AsyncIterator<String>>;
  posterKey: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  tags: () => Promise<AsyncIterator<String[]>>;
  description: () => Promise<AsyncIterator<String>>;
  ingredients: <T = Promise<AsyncIterator<IngredientSubscription>>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  directions: () => Promise<AsyncIterator<String[]>>;
  calories: () => Promise<AsyncIterator<Int>>;
  protein: () => Promise<AsyncIterator<Int>>;
  carbohydrates: () => Promise<AsyncIterator<Int>>;
  fat: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface RecipeNullablePromise
  extends Promise<Recipe | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  poster: () => Promise<String>;
  posterKey: () => Promise<String>;
  name: () => Promise<String>;
  tags: () => Promise<String[]>;
  description: () => Promise<String>;
  ingredients: <T = FragmentableArray<Ingredient>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  directions: () => Promise<String[]>;
  calories: () => Promise<Int>;
  protein: () => Promise<Int>;
  carbohydrates: () => Promise<Int>;
  fat: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface IngredientEdge {
  node: Ingredient;
  cursor: String;
}

export interface IngredientEdgePromise
  extends Promise<IngredientEdge>,
    Fragmentable {
  node: <T = IngredientPromise>() => T;
  cursor: () => Promise<String>;
}

export interface IngredientEdgeSubscription
  extends Promise<AsyncIterator<IngredientEdge>>,
    Fragmentable {
  node: <T = IngredientSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface IngredientPreviousValues {
  id: ID_Output;
  name: String;
  quantity: Float;
  unit: IngredientEnum;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface IngredientPreviousValuesPromise
  extends Promise<IngredientPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  quantity: () => Promise<Float>;
  unit: () => Promise<IngredientEnum>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface IngredientPreviousValuesSubscription
  extends Promise<AsyncIterator<IngredientPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Float>>;
  unit: () => Promise<AsyncIterator<IngredientEnum>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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

export interface Ingredient {
  id: ID_Output;
  name: String;
  quantity: Float;
  unit: IngredientEnum;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
}

export interface IngredientPromise extends Promise<Ingredient>, Fragmentable {
  id: () => Promise<ID_Output>;
  recipe: <T = RecipePromise>() => T;
  name: () => Promise<String>;
  quantity: () => Promise<Float>;
  unit: () => Promise<IngredientEnum>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface IngredientSubscription
  extends Promise<AsyncIterator<Ingredient>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  recipe: <T = RecipeSubscription>() => T;
  name: () => Promise<AsyncIterator<String>>;
  quantity: () => Promise<AsyncIterator<Float>>;
  unit: () => Promise<AsyncIterator<IngredientEnum>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface IngredientNullablePromise
  extends Promise<Ingredient | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  recipe: <T = RecipePromise>() => T;
  name: () => Promise<String>;
  quantity: () => Promise<Float>;
  unit: () => Promise<IngredientEnum>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
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

export interface AggregateIngredient {
  count: Int;
}

export interface AggregateIngredientPromise
  extends Promise<AggregateIngredient>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIngredientSubscription
  extends Promise<AsyncIterator<AggregateIngredient>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType;
  node: Ingredient;
  updatedFields: String[];
  previousValues: IngredientPreviousValues;
}

export interface IngredientSubscriptionPayloadPromise
  extends Promise<IngredientSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = IngredientPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IngredientPreviousValuesPromise>() => T;
}

export interface IngredientSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IngredientSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IngredientSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IngredientPreviousValuesSubscription>() => T;
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

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "IngredientEnum",
    embedded: false
  },
  {
    name: "Ingredient",
    embedded: false
  },
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
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
