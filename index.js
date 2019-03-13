
function takeANumber(line , name) // thought this was vastly more complex than it was
{
    line[line.length] = name;
    return `Welcome, ${name}. You are number ${line.length} in line.`; 
}


