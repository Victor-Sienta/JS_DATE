function task1(){
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    let dat=new Date();
    let today = dat.getDay();
    function lastDay(){
        if (today == 0)
            return 6;
        else{
            return (today-1)
        }
    }
    function tomorrowDay(){
        if (today == 6)
            return 0;
        else{
            return (today+1)
        }
    }
    alert(`Вчера: ${den[lastDay(today)]} \nСегодня: ${den[dat.getDay()]} \nЗавтра: ${den[tomorrowDay(today)]}`)
}