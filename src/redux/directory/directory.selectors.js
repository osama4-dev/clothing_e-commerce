import {createSelector} from 'reselect'

const selectDirectory = state => state.directory;
export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory=>directory.sections
)
//now this we will call in our directory component using mapStateToProps