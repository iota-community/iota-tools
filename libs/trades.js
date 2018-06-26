import loadDB from './db'
import transform from './transform'
import { isBefore, format } from 'date-fns'

export default async id => {
  const db = await loadDB()
  const trades = await db
    .child('trades')
    .child('ydx')
    .orderByChild('timestamp')
    .limitToLast(500)
    .once('value')
  const array = trades.val()
  if (array) {
    var arr = []
    Object.keys(array).map(key => {
      arr.push(array[key])
    })
    return arr.sort((a, b) => b.timestamp - a.timestamp)
  } else {
    return null
  }
}
