export function validateSquares(squares) {
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i]
    if (isEmptyObject(square) || square.text === "") {
      return false
    }
  }
  return true
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
