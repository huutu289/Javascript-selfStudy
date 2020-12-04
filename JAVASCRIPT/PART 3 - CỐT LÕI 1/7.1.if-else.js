// Làm bài tập tại đây

function run(number) {
    
    if(number%3===0 && number != 15)
    {
        return 'f';
    } else if (number%5===0 && number != 15)
    {
        return 8;
    }
    else if (number%15===0)
    {
        return 'f8';
    }

}
//or
function run(number) {
    
    if(number%15===0)
    {
        return 'f8';
    } else if (number%3===0)
    {
        return 'f';
    }
    else if (number%5===0)
    {
        return 8;
    }

}