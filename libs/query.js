import loadDB from './db'

export default async path => {
  const db = await loadDB()
  const query = await db.child(path).once('value')
  const data = query.val()
  if (data) {
    console.log(data)
    return data
  } else {
    return null
  }
}
