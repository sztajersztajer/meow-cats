export function addComment(payload) {
    return {
      type: 'ADD_COMMENTARY',
      payload
    }
}
export function addMeow(catId) {
    return {
      type: 'ADD_MEOW',
      payload: {catId}
    }
}

export function addCat(payload) {
    return {
        type: 'ADD_CAT',
        payload: payload
    }
}