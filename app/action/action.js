export const plus = (num) => ({
    type: 'PLUS',
    num: num
})


export const plus_thunk = (number) => {

    return (dispatch, getState) => {

        dispatch({
            type: 'PLUS',
            num: number
        });

    };
}