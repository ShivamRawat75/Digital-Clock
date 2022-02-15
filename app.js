function show(){
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    hr=(hr<10)? '0'+hr:hr;
    min=(min<10)? '0'+min:min;
    sec=(sec<10)? '0'+sec:sec;

    let time=hr + ':'+min +':'+sec;

    document.querySelector('#myTime').innerText =time;
    setTimeout(show,1000);
}
show();