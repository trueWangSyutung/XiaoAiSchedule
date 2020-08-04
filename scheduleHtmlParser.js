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
    var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])
    var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])
    var sections =[]
    for (var i=2;i<5;i++){
        if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
            sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
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
    /*
    console.info(courses)
    */
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
    /*
    console.info("-------")
    for (var i =0 ;i< result.length;i++){
        if (result[i].day==1){
            console.info(result[i])
        }
    }
    console.info("-------")

    for (var i =0 ;i< result.length;i++){
        if (result[i].day==2){
            console.info(result[i])
        }
    }
    console.info("-------")

    for (var i =0 ;i< result.length;i++){
        if (result[i].day==3){
            console.info(result[i])
        }
    }
    console.info("-------")

    for (var i =0 ;i< result.length;i++){
        if (result[i].day==4){
            console.info(result[i])
        }
    }
    console.info("-------")

    for (var i =0 ;i< result.length;i++){
        if (result[i].day==5){
            console.info(result[i])
        }
    }
    
    console.info(result)
    */
    return {courseInfos: result}
}
