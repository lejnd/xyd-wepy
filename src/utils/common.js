import moment from 'moment';

// 手机号验证规则
const isVerificationNumber = (number) => {
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(number)) {
        return false;
    } else {
        return true;
    }
}

const formatDuring = (mss) => {
    var days = parseInt(mss / (60 * 60 * 24));
    var hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
    // var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = (mss % (1000 * 60)) / 1000;
    return days + " 天 " + hours + " 小时 ";
}

// 日期时间格式化
const formatTime = (originTime) => {
    if (!originTime) return null;
    return moment(originTime).format('YYYY-MM-DD HH:mm:ss');
}

export default {
    isVerificationNumber, formatDuring, formatTime, 
};