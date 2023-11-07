function task1(){
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    let data = {
        "Новый год":"2023-01-01",
        "Рождество":"2023-01-07",
        "День Защитника Отечества":"2023-02-23",
        "Международный женский день":"2023-03-08",
        "Праздник Весны и Труда":"2023-05-01",
        "День Победы":"2023-05-09",
        "День России":"2023-06-12",
        "День народного единства":"2023-11-04",
    };
    let nameList = Object.keys(data);
    console.log(nameList);

    let dataList = Object.values(data);
    console.log(dataList);

    function dataListCh(i){
        dat = new Date(i);
        nameDay = den[dat.getDay()];
        return nameDay
    }
    
    let dataDays = nameList.map((x, i)=>({x, y:dataListCh(dataList[i])}));
    let dataDays2 = nameList.map((elem, i)=>(alert(`${elem}:${dataListCh(dataList[i])}`)));
    console.log(dataDays);
}