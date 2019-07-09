import streamToBuffer from '@server/utils/streamToBuffer/streamToBuffer'


const addRecipe = async (root, { props: { name, tags, poster } }, { database }) => {
  let rawPoster
  if (poster) {
    const { createReadStream } = await poster
    const stream = createReadStream()
    const posterBuffer = await streamToBuffer(stream)
    rawPoster = posterBuffer.toString('utf8')
  }

  return database.createRecipe({ name, tags: { set: tags }, poster: rawPoster })
}


export default addRecipe
