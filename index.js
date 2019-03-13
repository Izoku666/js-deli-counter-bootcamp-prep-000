
function takeANumber(line , name)
{
    line.length++;
    line[line.length - 1] = name;
    return `Welcome, ${name}. You are number ${line.length - 1} in line.`; 
}

