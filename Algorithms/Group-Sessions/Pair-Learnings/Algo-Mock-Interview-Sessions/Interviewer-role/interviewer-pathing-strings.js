/* 
QUESTION:
Today, you will be given the problem to simply a file path string.
On Unix style computers, you can always describe an absolute path by starting with a slash, and 
having / separated folders after it. Here's an example:
"/home/oliver"

There three additional rules to be aware of:  
1) Additional consecutive slashes don't matter. "/home/oliver" == "/home//oliver"  
2) A ./ means current directly, and also does not matter. "home/oliver" == "/home/./oliver"  
3) A ../ moves up to a parent directory. "/home/oliver/.." == "/home"  

In this problem, we're asking that you create the simplest possible path given an input string.

Follow-up:
Support relative paths. A relative path might not start with a leading slash and instead start with just a directory 
name, or a leading "./" or "../".
 
EXAMPLE(S)
"
/
a/
./
b/
../
../
c/." => "/c"  
Here, you're drilling two folder levels in: "a" then "b", but then moving up two directories because of ".." 
so therefore you should end up at /. Then, you move back into c, so the final output is just "/c".

root
 - a*
 - b*
 - c

 
/
a/
./
b/
../
../
c/.


Q: What happens in the case of "/../", or you try to traverse past the beginning of the directory?
A: Let's "/../" just equals "/" So. if you try to traverse past the beginning, you just stay where you are.


['a']

for char in input.split('/')
    if ('.')
        if single, we don't do anything
        else, pop off the stack
    else 
        push letter onto stack

return stack.pop() ?? '/'

FUNCTION SIGNATURE
func simplify(path: String) -> String
'''
*/
// Attempt:
function simplify(path) {
    const stack = []
    const items = path
      .split('/')
      .filter((pathItem) => Boolean(pathItem))
  
    for (const item of items) {
      if (item.includes('.')) {
        if (item === '..') {
          stack.pop()
        }
      } else {
        stack.push(item)
      }
    }
  
    return stack.pop() ?? '/'
  }
  
  // All paths start from the root directory - First part
  function formationSolutionOne(path) {
    const parts = path.split("/");
    const stack = [];
  
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      if (part === "..") {
        stack.pop();
      } else if (part !== "" && part !== ".") {
        stack.push(part);
      }
    }
  
    return "/" + stack.join('/');
  }
    
  // support relative paths - follow up solution
  function formationSolutionTwo(path) {
    const root = path.length > 0 && path[0] === '/';
    const parts = path.split('/').filter(s => s !== '');
    const stack = [];
  
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === '..' && i === 0) {
        stack.push(parts[i]);
      } else if (parts[i] === '..') {
        if (stack.length > 0) {
          stack.pop();
        }
      } else if (parts[i] === '.') {
        // Do nothing
      } else {
        stack.push(parts[i]);
      }
    }
  
    const outPath = stack.join('/')
    return (root ? '/' : '') + outPath;
  }
  
  // TEST CASES:
  console.log(simplifyPath('/foo/bar'));
  console.log(simplifyPath('/foo//bar/'));
  console.log(simplifyPath('foo/bar/'));
  console.log(simplifyPath('/foo/bar/..'));
  console.log(simplifyPath('/foo/../bar/'));
  console.log(simplifyPath('/foo/bar/../baz/./../baz/../biff'));
  
  // tests for relative paths
  console.log(simplifyPath('./foo/bar/'));
  console.log(simplifyPath('../foo/bar/'));