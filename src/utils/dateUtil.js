class DateUtil {
    formatFunc(date, format) {
        const m = date.getMonth() + 1;
        const month = m.toString();
        const mStr = month.length > 1 ? month : `0${month}`;
        const day = date.getDate().toString();
        const dayStr = day.length > 1 ? day : `0${day}`;
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const hoursStr = hours.length > 1 ? hours : `0${hours}`;
        const minutesStr = minutes.length > 1 ? minutes : `0${minutes}`;
        const seconds = date.getSeconds();
        const secondsStr = seconds.length > 1 ? seconds : `0${seconds}`;
        if (format === 'yyyyMMddHHmmss') {
            return date.getFullYear() + mStr + dayStr + hoursStr + minutesStr + secondsStr;
        } else if (format === 'YYYY-MM-dd HH:mm:ss') {
            return `${date.getFullYear()}-${mStr}-${dayStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
        } else if (format === 'yyyyMMdd') {
            return date.getFullYear() + mStr + dayStr;
        } else if (format === 'yyyy年M月d日') {
            return `${date.getFullYear()}年${m}月${day}日`;
        } else if (format === 'MM月dd日') {
            return `${mStr}月${dayStr}日`;
        } else if (format === 'M月d日') {
            return `${month}月${day}日`;
        } else if (format === 'H:m') {
            return `${hours}:${minutes}`;
        } else if (format === 'yyyy-MM-dd HH:mm') {
            return `${date.getFullYear()}-${mStr}-${dayStr} ${hoursStr}:${minutesStr}`;
        }
        return `${date.getFullYear()}-${mStr}-${dayStr}`;
    }
}

export default new DateUtil();