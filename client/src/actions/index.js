import * as types from './actionTypes'

export const addQuestion = (payload) => {
    return {
      type: types.ADD_QUESTION,
      payload: payload
    };
}

export const deletePost = (payload) => {
    return {
        type: types.DELETE_POST,
        payload: payload
    }
}

export const displayToast = (payload) => {
    return {
        type: types.DISPLAY_TOAST,
        payload: payload
    }
}

export const hideToast = (payload) => {
    return {
        type: types.HIDE_TOAST,
        payload: payload
    }
}

export const displayMobileSearch = (payload) => {
    return {
        type: types.DISPLAY_MOBILE_SEARCH,
        payload: payload
    }
}

export const hideMobileSearch = (payload) => {
    return {
        type: types.HIDE_MOBILE_SEARCH,
        payload: payload
    }
}

export const displayImageViewer = (payload) => {
    return {
        type: types.DISPLAY_IMAGE_VIEWER,
        payload: payload
    }
}
 
export const hideImageViewer = (payload) => {
    return {
        type: types.HIDE_IMAGE_VIEWER,
        payload: payload
    }
}

export const logIn = (payload) => {
    return {
        type: types.LOG_IN,
        payload: payload
    }
}

export const logOut = (payload) => {
    return {
        type: types.LOG_OUT,
        payload: payload
    }
}

export const loadQuestions = (payload) => {
    return {
        type: types.LOAD_QUESTIONS,
        payload: payload
    }
}

export const likeQuestion = (payload) => {
    return {
        type: types.LIKE_QUESTION,
        payload: payload
    }
}

export const loadSingleQuestion = (payload) => {
    return {
        type: types.LOAD_SINGLE_QUESTION,
        payload: payload
    }
}

export const loadNotifications = (payload) => {
    return {
        type: types.LOAD_NOTIFICATIONS,
        payload: payload
    }
}

export const markSeenNotifications = (payload) => {
    return {
        type: types.MARK_SEEN_NOTIFICATION,
        payload: payload
    }
}

export const markAllRead = (payload) => {
    return {
        type: types.MARK_ALL_READ,
        payload: payload
    }
}

export const shareQuestion = (payload) => {
    return {
        type: types.SHARE_POST,
        payload: payload
    }
}

export const hideSharePost = (payload) => {
    return {
        type: types.HIDE_SHARE_POST,
        payload: payload
    }
}

export const recentQuestions = (payload) => {
    return {
        type: types.RECENT_QUESTIONS,
        payload: payload
    }
}

export const noAnswers = (payload) => {
    return {
        type: types.NO_ANSWERS,
        payload: payload
    }
}

export const mostAnswers = (payload) => {
    return {
        type: types.MOST_ANSWERS,
        payload: payload
    }
}

export const solvedQuestions = (payload) => {
    return {
        type: types.SOLVED_QUESTIONS,
        payload: payload
    }
}
