//create action type
const SET_HOUR = 'SET_HOUR';
const SET_MINUTE = 'SET_MINUTE';
const SET_SECOND = 'SET_SECOND';

const SEND_CLOCK = 'SEND_CLOC';

let initialState = {
    clockHh: '',
    clockMm: '',
    clockSs: ''
}

const clockReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state, ///поверхностная копия
        //messages: [...state.messages],
    };

    switch (action.type) {

        case SET_HOUR: {
            return  {
                ...state,
                clockHh: action.clockHh
            }
        }
        case SET_MINUTE: {
            return  {
                ...state,
                clockMm: action.clockMm
            }
        }
        case SET_SECOND: {
            return  {
                ...state,
                clockSs: action.clockSs
            }
        }
        case SEND_CLOCK:
            return {
                ...state,
            }

        default:
            return stateCopy;
    }
}

export const setHourAC = (hh) => ({ type: SET_HOUR, clockHh: hh });
export const setMinuteAC = (mm) => ({ type: SET_MINUTE, clockMm: mm });
export const setSecondAC = (ss) => ({ type: SET_SECOND, clockSs: ss });
export const sendClockAC = () => ({ type: SEND_CLOCK });

export default clockReducer;