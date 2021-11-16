//create action type
const SET_INDEX = 'SET_INDEX';

let initialState = {
    cites: [
        {text: 'Chop your own wood and it will warm you twice.', author: 'Генри Форд'},
        {text: 'I don’t care what you think about me. I don’t think about you at all.', author: 'Коко Шанель'},
        {text: 'Work hard to get what you like, otherwise you\'ll be forced to just like what you get.', author: 'Бернард Шоу'},
        {text: 'In the End, we will remember not the words of our enemies, but the silence of our friends.', author: 'Мартин Лютер Кинг'},
        {text: 'When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.', author: 'Джон Леннон'},
        {text: 'The weak can never forgive. Forgiveness is the attribute of the strong.', author: 'Махатма Ганди'},
        {text: 'Success is the ability to go from failure to failure without losing your enthusiasm.', author: 'Уинстон Черчилль'}

    ],
    index: 0

}

const citeReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state, ///поверхностная копия
        //messages: [...state.messages],
    };

    switch (action.type) {

        case SET_INDEX: {
            return  {
                ...state,
                index: action.index
            }
        }

        default:
            return stateCopy;
    }
}

export const setIndexAC = (index) => ({ type: SET_INDEX, index });

export default citeReducer;