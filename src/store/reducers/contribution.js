export const initialState = {
    arr: [
        { id: 1, name: 'chim', dedication: 'for my father', sum: 50000, DateOfDonation: new Date(2023, 10, 7) },
        { id: 2, name: 'rachel', dedication: 'for myian', sum: 10152, DateOfDonation: new Date(2018, 10, 9) },
        { id: 3, name: 'shira', dedication: 'for myian', sum: 100, DateOfDonation: new Date(2018, 10, 9) },
        { id: 4, name: 'sari', dedication: 'for myian', sum: 10000, DateOfDonation: new Date(2018, 10, 9) },
        { id: 5, name: 'brachi', dedication: 'to arm', sum: 800000000, DateOfDonation: new Date(2018, 10, 9) },
    ],
    selectedContribution: null,
    selectedContributionForEdit: null
}

// הפונקציה הזו היא קובעת מה יהיה הסטייט באתר
// כלומר מה שהיא מחזירה זה היהי הסטייט הכללי מהרגע הזה והלאה
// עד הפעם הבאה שיעשו איזושהי פעולה באתר
// כל פעם באופן אוטומטי תקבל הסטייט כפי שהיה עד עכשיו
// ואת הפעולה שקרתה באתר
// ותחזיר סטייט חדש עם שינויים על פי הפעולה שקרתה
// פעם ראשונה הפונקציה מופעלת בעת טעינת האתר
export const contributionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_CONTRIBUTION_TO_PLAY":
    return {
        selectedContribution: action.contribution,
        selectedContributionForEdit: state.selectedContributionForEdit,
        arr: state.arr
    }

        case "ADD_CONTRIBUTION":
            return {
                ...state,
                arr: [...state.arr, action.payload]
            }
        case "SELECT_CONTRIBUTION_FOR_EDIT":
            return {
                selectedContribution: state.selectedContribution,
                selectedContributionForEdit: action.payload,
                arr: state.arr
            }
        case "DELETE_CONTRIBUTION":
            return {
                ...state,
                arr: state.arr.filter(item => item.id !== action.contributionId)
            }
        case "SAVE_EDITED_CONTRIBUTION":
            let updatedArr = state.arr.map(item => (item.id === action.payload.id ? action.payload : item));
            return {
                ...state,
                selectedContributionForEdit: null,
                arr: updatedArr
            }
        default:
            return state;
    }
}
