const util: any = {
    // 按照中间节点的进行组合 过滤掉不合理的组合
    filterCityPermutation: (cityList: any) => {
        let startCitys = [], endCitys = [];
        for(let i = 0; i < cityList.length; i++){
            if(i % 2 === 0)
                startCitys.push(cityList[i]);
            else
                endCitys.push(cityList[i]);
        }
        let startPermutation = util.generateFullPermutation(startCitys, []);
        let endPermutation = util.generateFullPermutation(endCitys, []);
        let res: any = [];
        for(let i = 0; i < startPermutation.length; i++){
            for(let j = 0; j < endPermutation.length; j++){
                let resItem = [...(startPermutation[i])];
                resItem.push(...(endPermutation[j]));
                res.push(resItem);
            }
        }
        return res;
    },

    // 生成城市点全排列
    generateFullPermutation: (cityList: any, res: any) => {
        if(cityList.length === 0)
            return res;
        let currentRes: any = [],
            currentCity: any = cityList.shift();
        if(res.length === 0){
            currentRes = [[currentCity]];
        }else{
            res.forEach((item: any) => {
                for(let i = 0; i <= item.length; i++){
                    let itemCopy = JSON.parse(JSON.stringify(item));
                    itemCopy.splice(i,0,currentCity);
                    currentRes.push(itemCopy);
                }
            });
        }
        return util.generateFullPermutation(cityList,currentRes);
    },

    // 获取当前日期
    getCurrentDate: (needDate: number) => {
        let year = new Date().getFullYear(),
            month = new Date().getMonth() + 1,
            day = new Date().getDate(),
            hour = new Date().getHours();
        while(needDate >=0){
            if(hour + needDate >= 24){
                needDate = needDate - ( 24 - hour );
                hour = 0;
                day ++;
            }else{
                hour += needDate;
                break;
            }
        }
        let maxDay = new Date(year, month, 0).getDate();
        if(day > maxDay){
            month ++;
            day = day - maxDay;
        }
        return `${year}-${month}-${day}-${hour}`;
    },

    // 转换日期
    transformDate: (dateString: any) => {
        if(dateString instanceof Date)
            return dateString;
        let dateArr = dateString.split('-');
        let date = new Date();
        date.setFullYear(parseInt(dateArr[0]));
        date.setMonth(parseInt(dateArr[1]) - 1);
        date.setDate(parseInt(dateArr[2]));
        if(dateArr.length > 3)
            date.setHours(parseInt(dateArr[3]));
        else
            date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
    },

    //  计算城市点之间的距离
    getDistance: (cityList: any) => {
        let res: {nodes: any, links: any} = {nodes: [],links: []};
        for(let i = 0; i < cityList.length - 1; i++){
            if(i === 0){
                res.nodes.push({
                    id: cityList[i].id,
                    name: cityList[i].cityName
                })
            }
            for(let j = i + 1; j < cityList.length; j++){
                if(i === 0){
                    res.nodes.push({
                        id: cityList[j].id,
                        name: cityList[j].cityName
                    })
                }
                let startCity = cityList[i], targetCity = cityList[j];
                res.links.push({
                    source: startCity.id,
                    sourceName: startCity.cityName,
                    target: targetCity.id,
                    targetName: targetCity.cityName,
                    distance: util.calDistanceByCoords(
                        startCity.longitude,
                        startCity.latitude,
                        targetCity.longitude,
                        targetCity.latitude
                    )
                })
            }
        }
        return res;
    },

    // 根据坐标计算两点之间的距离
    calDistanceByCoords: (long1: number, lati1: number, long2: number, lati2: number) => {
        let radlati1 = lati1 * Math.PI / 180.0;
        let radlati2 = lati2 * Math.PI / 180.0;
        let a = radlati1 - radlati2;
        let  b = long1 * Math.PI / 180.0 - long2 * Math.PI / 180.0;
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
        Math.cos(radlati1) * Math.cos(radlati2) * Math.pow(Math.sin(b/2),2)));
        s = s * 6378.137 ;// EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return s;
    },
}

export default util;