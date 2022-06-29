import { DETAILS, LOADING } from "../productType";
const initial = {
    data : [] , 
    loading : false
}
export const DetailsRed = (state = initial, action) => {
	switch (action.type) {
		case LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case DETAILS: {
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
