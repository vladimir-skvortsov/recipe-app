import streamToBuffer from '@server/utils/streamToBuffer/streamToBuffer'


const addRecipe = async (root, { props: { name, tags, poster } }, { database }) => {
  const { createReadStream } = await poster
  const stream = createReadStream()
  const posterBuffer = await streamToBuffer(stream)
  const posterURI = posterBuffer.toString('utf8')
  console.log(name)

  return database.createRecipe({ name, tags: { set: tags }, poster: posterURI })
}


export default addRecipe
