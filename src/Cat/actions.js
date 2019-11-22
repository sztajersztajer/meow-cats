export const ADD_COMMENTARY = 'ADD_COMMENTARY';
export function addComment(payload) {
    return {
      type: 'ADD_COMMENTARY',
      payload
    }
}

export const ADD_MEOW = 'ADD_MEOW';
export function addMeow(catId) {
    return {
      type: 'ADD_MEOW',
      payload: {catId}
    }
}

export const ADD_CAT = 'ADD_CAT';
export function addCat(payload) {
    return {
        type: 'ADD_CAT',
        payload: payload
    }
}