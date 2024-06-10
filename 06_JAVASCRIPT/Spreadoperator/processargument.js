function processArguments(...args)
{
    if(args.length == 0)
    {
        console.log("No arguments provided");
    }
    else if(args.length == 1)
    {
        console.log("one argument",args[0]);
    }
    else{
        console.log("Multiple arguments", args);
    }
}

processArguments();
processArguments(10);
processArguments('apple' , 'orange' , 'banana')