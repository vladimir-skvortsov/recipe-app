// Code generated by Prisma (prisma@1.34.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateIngredient {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Ingredient {
  id: ID!
  recipe: Recipe!
  name: String!
  quantity: Float!
  unit: IngredientEnum!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type IngredientConnection {
  pageInfo: PageInfo!
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  id: ID
  recipe: RecipeCreateOneWithoutIngredientsInput!
  name: String!
  quantity: Float!
  unit: IngredientEnum!
}

input IngredientCreateManyWithoutRecipeInput {
  create: [IngredientCreateWithoutRecipeInput!]
  connect: [IngredientWhereUniqueInput!]
}

input IngredientCreateWithoutRecipeInput {
  id: ID
  name: String!
  quantity: Float!
  unit: IngredientEnum!
}

type IngredientEdge {
  node: Ingredient!
  cursor: String!
}

enum IngredientEnum {
  Item
  G
  Ml
  Tsp
  Tbsp
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  unit_ASC
  unit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  quantity: Float!
  unit: IngredientEnum!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input IngredientScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  unit: IngredientEnum
  unit_not: IngredientEnum
  unit_in: [IngredientEnum!]
  unit_not_in: [IngredientEnum!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [IngredientScalarWhereInput!]
  OR: [IngredientScalarWhereInput!]
  NOT: [IngredientScalarWhereInput!]
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
  AND: [IngredientSubscriptionWhereInput!]
}

input IngredientUpdateInput {
  recipe: RecipeUpdateOneRequiredWithoutIngredientsInput
  name: String
  quantity: Float
  unit: IngredientEnum
}

input IngredientUpdateManyDataInput {
  name: String
  quantity: Float
  unit: IngredientEnum
}

input IngredientUpdateManyMutationInput {
  name: String
  quantity: Float
  unit: IngredientEnum
}

input IngredientUpdateManyWithoutRecipeInput {
  create: [IngredientCreateWithoutRecipeInput!]
  delete: [IngredientWhereUniqueInput!]
  connect: [IngredientWhereUniqueInput!]
  set: [IngredientWhereUniqueInput!]
  disconnect: [IngredientWhereUniqueInput!]
  update: [IngredientUpdateWithWhereUniqueWithoutRecipeInput!]
  upsert: [IngredientUpsertWithWhereUniqueWithoutRecipeInput!]
  deleteMany: [IngredientScalarWhereInput!]
  updateMany: [IngredientUpdateManyWithWhereNestedInput!]
}

input IngredientUpdateManyWithWhereNestedInput {
  where: IngredientScalarWhereInput!
  data: IngredientUpdateManyDataInput!
}

input IngredientUpdateWithoutRecipeDataInput {
  name: String
  quantity: Float
  unit: IngredientEnum
}

input IngredientUpdateWithWhereUniqueWithoutRecipeInput {
  where: IngredientWhereUniqueInput!
  data: IngredientUpdateWithoutRecipeDataInput!
}

input IngredientUpsertWithWhereUniqueWithoutRecipeInput {
  where: IngredientWhereUniqueInput!
  update: IngredientUpdateWithoutRecipeDataInput!
  create: IngredientCreateWithoutRecipeInput!
}

input IngredientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  recipe: RecipeWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  quantity: Float
  quantity_not: Float
  quantity_in: [Float!]
  quantity_not_in: [Float!]
  quantity_lt: Float
  quantity_lte: Float
  quantity_gt: Float
  quantity_gte: Float
  unit: IngredientEnum
  unit_not: IngredientEnum
  unit_in: [IngredientEnum!]
  unit_not_in: [IngredientEnum!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [IngredientWhereInput!]
}

input IngredientWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  updateManyIngredients(data: IngredientUpdateManyMutationInput!, where: IngredientWhereInput): BatchPayload!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateManyRecipes(data: RecipeUpdateManyMutationInput!, where: RecipeWhereInput): BatchPayload!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  node(id: ID!): Node
}

type Recipe {
  id: ID!
  poster: String
  posterKey: String
  name: String!
  tags: [String!]!
  description: String
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient!]
  directions: [String!]!
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RecipeConnection {
  pageInfo: PageInfo!
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreatedirectionsInput {
  set: [String!]
}

input RecipeCreateInput {
  id: ID
  poster: String
  posterKey: String
  name: String!
  tags: RecipeCreatetagsInput
  description: String
  ingredients: IngredientCreateManyWithoutRecipeInput
  directions: RecipeCreatedirectionsInput
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
}

input RecipeCreateOneWithoutIngredientsInput {
  create: RecipeCreateWithoutIngredientsInput
  connect: RecipeWhereUniqueInput
}

input RecipeCreatetagsInput {
  set: [String!]
}

input RecipeCreateWithoutIngredientsInput {
  id: ID
  poster: String
  posterKey: String
  name: String!
  tags: RecipeCreatetagsInput
  description: String
  directions: RecipeCreatedirectionsInput
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
}

type RecipeEdge {
  node: Recipe!
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  poster_ASC
  poster_DESC
  posterKey_ASC
  posterKey_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  calories_ASC
  calories_DESC
  protein_ASC
  protein_DESC
  carbohydrates_ASC
  carbohydrates_DESC
  fat_ASC
  fat_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RecipePreviousValues {
  id: ID!
  poster: String
  posterKey: String
  name: String!
  tags: [String!]!
  description: String
  directions: [String!]!
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
  AND: [RecipeSubscriptionWhereInput!]
}

input RecipeUpdatedirectionsInput {
  set: [String!]
}

input RecipeUpdateInput {
  poster: String
  posterKey: String
  name: String
  tags: RecipeUpdatetagsInput
  description: String
  ingredients: IngredientUpdateManyWithoutRecipeInput
  directions: RecipeUpdatedirectionsInput
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
}

input RecipeUpdateManyMutationInput {
  poster: String
  posterKey: String
  name: String
  tags: RecipeUpdatetagsInput
  description: String
  directions: RecipeUpdatedirectionsInput
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
}

input RecipeUpdateOneRequiredWithoutIngredientsInput {
  create: RecipeCreateWithoutIngredientsInput
  update: RecipeUpdateWithoutIngredientsDataInput
  upsert: RecipeUpsertWithoutIngredientsInput
  connect: RecipeWhereUniqueInput
}

input RecipeUpdatetagsInput {
  set: [String!]
}

input RecipeUpdateWithoutIngredientsDataInput {
  poster: String
  posterKey: String
  name: String
  tags: RecipeUpdatetagsInput
  description: String
  directions: RecipeUpdatedirectionsInput
  calories: Int
  protein: Int
  carbohydrates: Int
  fat: Int
}

input RecipeUpsertWithoutIngredientsInput {
  update: RecipeUpdateWithoutIngredientsDataInput!
  create: RecipeCreateWithoutIngredientsInput!
}

input RecipeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  poster: String
  poster_not: String
  poster_in: [String!]
  poster_not_in: [String!]
  poster_lt: String
  poster_lte: String
  poster_gt: String
  poster_gte: String
  poster_contains: String
  poster_not_contains: String
  poster_starts_with: String
  poster_not_starts_with: String
  poster_ends_with: String
  poster_not_ends_with: String
  posterKey: String
  posterKey_not: String
  posterKey_in: [String!]
  posterKey_not_in: [String!]
  posterKey_lt: String
  posterKey_lte: String
  posterKey_gt: String
  posterKey_gte: String
  posterKey_contains: String
  posterKey_not_contains: String
  posterKey_starts_with: String
  posterKey_not_starts_with: String
  posterKey_ends_with: String
  posterKey_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  ingredients_some: IngredientWhereInput
  calories: Int
  calories_not: Int
  calories_in: [Int!]
  calories_not_in: [Int!]
  calories_lt: Int
  calories_lte: Int
  calories_gt: Int
  calories_gte: Int
  protein: Int
  protein_not: Int
  protein_in: [Int!]
  protein_not_in: [Int!]
  protein_lt: Int
  protein_lte: Int
  protein_gt: Int
  protein_gte: Int
  carbohydrates: Int
  carbohydrates_not: Int
  carbohydrates_in: [Int!]
  carbohydrates_not_in: [Int!]
  carbohydrates_lt: Int
  carbohydrates_lte: Int
  carbohydrates_gt: Int
  carbohydrates_gte: Int
  fat: Int
  fat_not: Int
  fat_in: [Int!]
  fat_not_in: [Int!]
  fat_lt: Int
  fat_lte: Int
  fat_gt: Int
  fat_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RecipeWhereInput!]
}

input RecipeWhereUniqueInput {
  id: ID
}

type Subscription {
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
}
`