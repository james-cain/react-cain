import * as upgradeInfo from './action-type';
import API from '../../api/api';

export const getUserlevel = () => {
    return async dispatch => {
        try {
            let userLevels = await API.getUserlevel();
            console.log('============');
            console.log(userLevels);

            dispatch({
                type: upgradeInfo.INITRULES,
                steps: userLevels
            });
        } catch(err) {
            console.error(err);
        }
    }
}

export const setUpgrade = info => {
    return {
        type: upgradeInfo.SETSTEPS,
        stepsId: info,
    }
}

export const setRules = info => {
    return {
        type: upgradeInfo.SETRULES,
        rulesId: info,
    }
}

export const deleteSelectedRules = info => {
    return {
        type: upgradeInfo.DELETESELECTEDRULES,
        rulesId: info,
    }
}