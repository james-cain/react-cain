import * as upgradeInfo from './action-type';

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