function getDay(weekChinese) {
    switch (weekChinese) {
        case "一": {
            return 1;
            break;
        }
        case "二": {
            return 2;
            break;
        }
        case "三": {
            return 3;
            break;
        }
        case "四": {
            return 4;
            break;

        }
        case "五": {
            return 5;
            break;
        }
        case "六": {
            return 6;
            break;
        }
        case "日": {
            return  7;
            break;
        }
        default : {
            return  null;
            break;
        }
    }
}
function getSections(time) {
    var sections =[]
    for (var i=2;i<5;i++){
        if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!=="" && sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})===-1){
            var num  =Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])
            if(num === 1)  {
                sections.push({section: num,startTime: "08:00",endTime: "08:55"})
            }
            else if (num === 2) {
                sections.push({section: num,startTime: "08:50",endTime: "09:35"})

            }
            else if (num === 3) {
                sections.push({section: num,startTime: "09:50",endTime: "10:35"})

            }
            else if (num === 4) {
                sections.push({section: num,startTime: "10:40",endTime: "11:25"})

            }
            else if (num === 5) {
                sections.push({section: num,startTime: "11:30",endTime: "12:15"})

            }
            else if (num === 6) {
                sections.push({section: num,startTime: "13:30",endTime: "14:15"})

            }
            else if (num === 7) {
                sections.push({section: num,startTime: "14:20",endTime: "15:05"})
            }
            else if (num === 8) {
                sections.push({section: num,startTime: "15:20",endTime: "16:05"})
            }
            else if (num === 9) {
                sections.push({section: num,startTime: "16:10",endTime: "16:55"})
            }
            else if (num === 10) {
                sections.push({section: num,startTime: "18:30",endTime: "19:15"})
            }
            else if (num === 11) {
                sections.push({section: num,startTime: "19:20",endTime: "20:05"})
            }
            else if (num === 12) {
                sections.push({section: num,startTime: "20:10",endTime: "20:55"})

            }
            else if (num === 13) {
                sections.push({section: num,startTime: "21:00",endTime: "21:45"})
            }
            else {
                sections.push({section: 0})
                this.section.push({startTime: null});
                this.section.push({endTime: null});
            }



        }
    }
    return sections

}
function getWeek(week) {
    var t = week.split("-")
    var weeks=[]
    var c=Number(t[0])
    var d=Number(t[1])
    if (c==d){
        weeks.push(c)
    }
    else{
        for(var i = c;i<=d;i++){
            weeks.push(i)
        }
    }
    return weeks
}
function ReduceRepetition(result){
    for (let i = 0; i < result.length; i++) {
        for (let j = i; j < result.length; j++) {
            if(
                result[i].day === result[j].day &&
                result[i].name === result[j].name &&
                result[i].teacher === result[j].teacher &&
                result[i].sections === result[j].sections &&
                result[i].position === result[j].position &&
                result[i].weeks === result[j].weeks ){
                Get_ShengXia(result,j)

            }
            else{

            }
        }
    }

    return result

}
function Get_ShengXia(result,key){
    a =  result.splice(key,1)
    b= []
    for (var i =0 ;i<result.key;i++){
        if(result[i]==a){
            b.push(result[i])
        }
    }
    return b



}
function get_baseInformation(ceshi){
    let re = {sections: [], weeks: []}
    re.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
    re.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
    re.name = ceshi.children[0].data;
    return re
}
function getResult(ceshi) {
    let result=[]
    let re = get_baseInformation(ceshi)
    let time = ceshi.children[0].next.children[0].next.children[0].data
    let week = time.split(/{|}|\||周|第|单|双/)[4]
    let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]
    re.day = getDay(weekChinese)
    re.sections = getSections(time)
    re.weeks = getWeek(week)
    result.push(re)

    return result;


}
function scheduleHtmlParser(html) {
    let result = []
    let courses = $(html).find('td').has('br')
    for (let p = 0; p < courses.length; p++) {
        let ceshi = courses[p]
        result.push.apply(result,getResult(ceshi))
        for (let i = 1;i<100;i++){
            if(ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next!=null){
                ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
                result.push.apply(result,getResult(ceshi))
            }
        }
    }
    ReduceRepetition(result)
    return {courseInfos: result}
}
