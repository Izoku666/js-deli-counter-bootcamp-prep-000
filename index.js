
function takeANumber(line , name)
{
    line.length++;
    line[line.length] = name;
    return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

