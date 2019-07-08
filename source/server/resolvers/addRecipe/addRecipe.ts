import { prisma } from '@server/utils/prisma/prisma'


const addRecipe = (root, { props }) => prisma.createRecipe(props)


export default addRecipe
