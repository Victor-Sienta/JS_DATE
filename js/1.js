function task1(){
    let dataStr = prompt("Введите любую дату в формате '2000-01-01'");
    dat=new Date(dataStr);
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    let dataNameDay = den[dat.getDay()];
    alert(`${dataStr} ${dataNameDay}`)
}