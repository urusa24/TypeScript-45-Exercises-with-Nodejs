//                                      ASSIGNMENT # 6
//===================================================================================================
//Stripping Names :Store a person's name,and include some white spaces characters at the beginning and
//end of the name. Make sure you use each character combination,"\t" and "\n" at least once.
//Print the name once, so the white space around the name is displayed. Then print the name after stripping
//the white spaces.

let whitespaceName = "\n\t Urusa Aazim \t\n";

console.log(whitespaceName);

let withoutwhitespaceName = whitespaceName.trim();

console.log(withoutwhitespaceName);