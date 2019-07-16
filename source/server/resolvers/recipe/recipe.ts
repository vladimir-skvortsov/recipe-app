import { prisma } from '@server/utils/prisma/prisma'


const recipe = (root, { id }) => prisma.recipe({ id })


export default recipe
