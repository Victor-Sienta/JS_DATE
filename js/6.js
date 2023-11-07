function task1(){
    arr = []
    for (i = 1; i<=12; i++)
        {let d = new Date(`2023-${i}-13`);
        if (d.getDay() == 5)
            arr+=("\n" + d.toLocaleString());
        }
    alert(arr)
}