
function takeANumber(line , name) // thought this was vastly more complex than it was
{
    line[line.length] = name;
    return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

function nowServing(line)
{
  var currentCustomer = line[0];
  if(line.length < 1)
  {
    line.shift();
    return `Currently serving ${currentCustomer}.`;
  }
  
  else
  {
      return "There is nobody waiting to be served!";
  }
}
