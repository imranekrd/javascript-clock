function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    //padstart will add leading zero.  
    var minutes = String(date.getMinutes()).padStart(2,'0');
    var seconds = String(date.getSeconds()).padStart(2,'0');
    var session = document.getElementsByClassName('session')
    
    if(hours >= 12){
        session = session.innerHTML = 'PM'
    }else{
        session = session.innerHTML = 'AM'
    }

    if(hours > 12){
        hours = hours -12
    }

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.session').innerHTML = session;
    

}

setInterval(displayTime,1000)