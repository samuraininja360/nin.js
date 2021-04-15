//Welcome to NinJS, trust me this is a super cool library

/*To use functions related to physics and graphics note that
the sprites used as parameters need to be an array! It is
recommended that you use nested arrays to store clones of
sprites. Hopefully this library will shorten your code!*/

mySprite = [[0,0,100,100]] //An example to help you

//Sprite functions

function boxCollision(sprite1, sprite2) {
  if (sprite1[0] + sprite1[2]/2 > sprite2[0] - sprite2[2]/2 && sprite1[0] - sprite1[2]/2 < sprite2[0] + sprite2[2]/2 && sprite1[1] + sprite1[3]/2 > sprite2[1] - sprite2[3]/2 && sprite1[1] - sprite1[3]/2 < sprite2[1] + sprite2[3]/2) {
    return true
  } else {
    return false
  }
}

function center(sprite) {
  sprite[0] -= sprite[2]
  sprite[1] -= sprite[3]
}

function distance(sprite1, sprite2) {
  return Math.sqrt(((sprite1[0] - sprite2[0])*(sprite1[0] - sprite2[0]))+((sprite1[1] - sprite2[1])*(sprite1[1] - sprite2[1])))
}

//Data functions

function filterInt(value) {
  //Filters a string into a number
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

function intArray(input, output) {
  for (i=0;i<input.length;i++) {
    output[i] = filterInt(input[i])
  }
}

function addLastItem(item, array) {
  array.push(item)
  return array.length
}

function deleteLastItem(array) {
  array.pop()
  return array.length
}

function deleteRange(start, end, array) {
  array.splice(start, end - start)
  return array
}

function deleteIndex(index, array) {
  array.splice(index, index + 1)
  return array
}

function deleteItem(item, array) {
  array.splice(array.indexOf(item), 1)
  return item
}

function replaceIndex(index, newItem, array) {
  array.splice(index, 1, newItem)
  return array
}

function replaceItem(item, newItem, array) {
  array.splice(array.indexOf(item), 1, newItem)
  return array
}

