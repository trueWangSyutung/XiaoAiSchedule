function scheduleHtmlParser(html) {
//采用非常笨蛋的办法，对在单个单元格内的课程提取，n次操作。
    let result = []
    let courses = $(html).find('td').has('br')


    for (let p = 0; p < courses.length; p++) {
        let re = {sections: [], weeks: []}
        let ceshi = courses[p]
        re.position = courses[p].children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
        re.teacher = courses[p].children[0].next.children[0].next.children[0].next.children[0].data
        re.name = courses[p].children[0].data;

        let time =courses[p].children[0].next.children[0].next.children[0].data

        let week = time.split(/{|}|\||周|第|单|双/)[4]


        let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

        switch (weekChinese) {
            case "一": {
                re.day = 1;
                break;
            }
            case "二": {
                re.day = 2;
                break;
            }
            case "三": {
                re.day = 3;
                break;
            }
            case "四": {
                re.day = 4;
                break;
            }
            case "五": {
                re.day = 5;
                break;
            }
            case "六": {
                re.day = 6;
                break;
            }
            case "日": {
                re.day = 7;
                break;
            }
            default : {
                re.day = null;
                break;
            }
        }



        var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

        var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

        for (var i=2;i<5;i++){
            if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!=""&&re.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                re.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
            }

        }


        var t = week.split("-")
        var c=Number(t[0])
        var d=Number(t[1])
        if (c==d){
            re.weeks.push(c)
        }
        else{
            for(var i = c;i<=d;i++){
                re.weeks.push(i)
            }
        }

        result.push(re)

        for (var i =0;i<10;i++){


        }
        let tt1 = courses[p].children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt1.next!=null){
            ceshi = courses[p].children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re2= {sections: [], weeks: []}
            re2.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re2.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re2.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re2.name,re2.teacher,re2.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re2.day = 1;
                    break;
                }
                case "二": {
                    re2.day = 2;
                    break;
                }
                case "三": {
                    re2.day = 3;
                    break;
                }
                case "四": {
                    re2.day = 4;
                    break;
                }
                case "五": {
                    re2.day = 5;
                    break;
                }
                case "六": {
                    re2.day = 6;
                    break;
                }
                case "日": {
                    re2.day = 7;
                    break;
                }
                default : {
                    re2.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re2.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re2.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re2.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re2.weeks.push(i)
                }
            }

            if(result.indexOf(re2)!=-1){

            }
            else{
                result.push(re2)

            }

        }

        let tt2 = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt2.next!=null){
            ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re3= {sections: [], weeks: []}
            re3.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re3.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re3.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re3.name,re3.teacher,re3.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re3.day = 1;
                    break;
                }
                case "二": {
                    re3.day = 2;
                    break;
                }
                case "三": {
                    re3.day = 3;
                    break;
                }
                case "四": {
                    re3.day = 4;
                    break;
                }
                case "五": {
                    re3.day = 5;
                    break;
                }
                case "六": {
                    re3.day = 6;
                    break;
                }
                case "日": {
                    re3.day = 7;
                    break;
                }
                default : {
                    re3.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re3.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re3.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re3.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re3.weeks.push(i)
                }
            }

            if(result.indexOf(re3)!=-1){

            }
            else{
                result.push(re3)

            }

        }

        let tt3 = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt3.next!=null){
            ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re4= {sections: [], weeks: []}
            re4.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re4.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re4.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re4.name,re4.teacher,re4.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re4.day = 1;
                    break;
                }
                case "二": {
                    re4.day = 2;
                    break;
                }
                case "三": {
                    re4.day = 3;
                    break;
                }
                case "四": {
                    re4.day = 4;
                    break;
                }
                case "五": {
                    re4.day = 5;
                    break;
                }
                case "六": {
                    re4.day = 6;
                    break;
                }
                case "日": {
                    re4.day = 7;
                    break;
                }
                default : {
                    re4.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re4.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re4.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re4.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re4.weeks.push(i)
                }
            }

            if(result.indexOf(re4)!=-1){

            }
            else{
                result.push(re4)

            }

        }

        let tt4 = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt4.next!=null){
            ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re5= {sections: [], weeks: []}
            re5.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re5.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re5.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re5.name,re5.teacher,re5.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re5.day = 1;
                    break;
                }
                case "二": {
                    re5.day = 2;
                    break;
                }
                case "三": {
                    re5.day = 3;
                    break;
                }
                case "四": {
                    re5.day = 4;
                    break;
                }
                case "五": {
                    re5.day = 5;
                    break;
                }
                case "六": {
                    re5.day = 6;
                    break;
                }
                case "日": {
                    re5.day = 7;
                    break;
                }
                default : {
                    re5.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re5.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re5.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re5.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re5.weeks.push(i)
                }
            }

            if(result.indexOf(re5)!=-1){

            }
            else{
                result.push(re5)

            }

        }

        let tt5 = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt5.next!=null){
            ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re6= {sections: [], weeks: []}
            re6.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re6.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re6.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re6.name,re6.teacher,re6.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re6.day = 1;
                    break;
                }
                case "二": {
                    re6.day = 2;
                    break;
                }
                case "三": {
                    re6.day = 3;
                    break;
                }
                case "四": {
                    re6.day = 4;
                    break;
                }
                case "五": {
                    re6.day = 5;
                    break;
                }
                case "六": {
                    re6.day = 6;
                    break;
                }
                case "日": {
                    re6.day = 7;
                    break;
                }
                default : {
                    re6.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re6.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re6.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re6.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re6.weeks.push(i)
                }
            }

            if(result.indexOf(re6)!=-1){

            }
            else{
                result.push(re6)

            }

        }

        let tt6 = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
        if(tt6.next!=null){
            ceshi = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].next.children[0]
            let re7= {sections: [], weeks: []}
            re7.position = ceshi.children[0].next.children[0].next.children[0].next.children[0].next.children[0].data
            re7.teacher = ceshi.children[0].next.children[0].next.children[0].next.children[0].data
            re7.name = ceshi.children[0].data;

            let time =ceshi.children[0].next.children[0].next.children[0].data
            console.info(time,re7.name,re7.teacher,re7.position)

            let week = time.split(/{|}|\||周|第|单|双/)[4]


            let weekChinese = time.split(/第|周|\|单|双|{|}|-|,|节/)[1]

            switch (weekChinese) {
                case "一": {
                    re7.day = 1;
                    break;
                }
                case "二": {
                    re7.day = 2;
                    break;
                }
                case "三": {
                    re7.day = 3;
                    break;
                }
                case "四": {
                    re7.day = 4;
                    break;
                }
                case "五": {
                    re7.day = 5;
                    break;
                }
                case "六": {
                    re7.day = 6;
                    break;
                }
                case "日": {
                    re7.day = 7;
                    break;
                }
                default : {
                    re7.day = null;
                    break;
                }
            }



            var a=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[2])

            var b=Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[3])

            for (var i=2;i<5;i++){
                if(time.split(/第|周|\|单|双|{|}|-|,|节/)[i]!="" && re7.sections.indexOf({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})==-1){
                    re7.sections.push({section: Number(time.split(/第|周|\|单|双|{|}|-|,|节/)[i])})
                }

            }


            var t = week.split("-")
            var c=Number(t[0])
            var d=Number(t[1])
            if (c==d){
                re7.weeks.push(c)
            }
            else{
                for(var i = c;i<=d;i++){
                    re7.weeks.push(i)
                }
            }

            if(result.indexOf(re7)!=-1){

            }
            else{
                result.push(re7)

            }

        }


    }
    result=ReduceRepetition(result)
    for (var i =0 ;i< result.length;i++){
        if (result[i].day==2){
            console.info(result[i])
        }
    }
    console.info(result)

    return {courseInfos: result}
}

function ReduceRepetition(result){
//去重操作

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
