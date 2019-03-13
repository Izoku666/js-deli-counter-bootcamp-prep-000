
function takeANumber(line , name)
{
    line[line.length] = name;
        line.length++;
    return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

