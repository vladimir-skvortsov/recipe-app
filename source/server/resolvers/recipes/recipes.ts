import { prisma } from '@server/utils/prisma/prisma'


const recipes = () => prisma.recipes()


export default recipes
