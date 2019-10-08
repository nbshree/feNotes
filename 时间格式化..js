    var mydate = new Date("2019-06-03");
    var newDays = dateFtt("yyyy-MM-dd", getDay(mydate, -3));
    console.log(newDays);
    function dateFtt(fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(-3),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    function getDay(days, num) {
        var targetday_milliseconds = days.getTime() + 1000 * 60 * 60 * 24 * num;
        days.setTime(targetday_milliseconds);
        var newDay = new Date(days);
        return newDay;
    }