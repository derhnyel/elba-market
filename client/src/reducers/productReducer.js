export default function products(state = [
    {
        name: "orange",
        price: 50
    }
], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return action.payload;
        default:
            return state
    }
}