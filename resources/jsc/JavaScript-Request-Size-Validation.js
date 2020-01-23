var request_size=context.getVariable("request.header.Content-Length");
var maxRequestSize = parseInt(context.getVariable("requestSizekvm")); // value from KVM

//maxRequestSize = parseInt(maxRequestSize);

if(request_size > maxRequestSize)
{
    context.setVariable("jsFaultName","InvalidSize");
    throw new Error();
}