export default function user(state = {
    user: 'Dakup Nengak',
    mail: 'nengakdakup@gmail.com'
}, action) {
    switch (action.type) {
        case 'LOAD_USER':
            return action.payload;
        default:
            return state
    }
}