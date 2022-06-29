import { HERO, LOADING } from "../productType";
const initial = {
    data : [] , 
    loading : false
}
export const HeroReducer = (state = initial, action) => {
	switch (action.type) {
		case LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case HERO: {
            return {
                ...state,
                data:action.payload ,
                loading: false,
            };
        }
		default:
			return state;
	}
};
