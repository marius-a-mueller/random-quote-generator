export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const COLOR_CHANGED = 'COLOR_CHANGED';

export const fetchingData = () => {
    return {
        type: FETCHING_DATA
    }
}
export const receivedData = (data) => {
    return {
        type: RECEIVED_DATA,
        quote: data.content,
        author: data.author
    }
}

export const colorChanged = (data) => {
    return {
        type: COLOR_CHANGED,
        color: data.color
    }
}
