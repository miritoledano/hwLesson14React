export const selectcontributionToPlay = (contribution) => {
    return {
        type: "SELECT_CONTRIBUTION_TO_PLAY", // תיקון שם הפעולה
        contribution: contribution
    }
}


export const deleteContribution = (contributionId) => {
    return {
        type: "DELETE_CONTRIBUTION",
        contributionId:contributionId
    }
}

export const addContribution = (contribution) => {
    return {
        type: "ADD_CONTRIBUTION",
        payload: contribution
    }
}

export const selectContributionForEdit = (contribution) => {
    return {
        type: "SELECT_CONTRIBUTION_FOR_EDIT",
        payload: contribution
    }
}

export const saveEditedContribution = (contribution) => {
    return {
        type: "SAVE_EDITED_CONTRIBUTION",
        payload: contribution
    }
}
