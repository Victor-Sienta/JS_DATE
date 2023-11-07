function task1(){
    let milisecunds = prompt("Введите количество милисекунд \n(Нужно более 1000 для отображения результата)");
    if(Number.isInteger(milisecunds) || milisecunds<0 || isNaN(milisecunds))
    {
        alert("Ошибка ввода данных");
    }
    else{
        let days=milisecunds/(1000*60*60*24);
        let hours=milisecunds/(1000*60*60);
        let minutes=milisecunds/(1000*60);
        let seconds=milisecunds/(1000);
        alert("d: " + days.toFixed(1) + "\nh: " + hours.toFixed(1) + "\nm: " + minutes.toFixed(1) + "\ns: " + seconds.toFixed(1));
    }
}