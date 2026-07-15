console.log(typeof null);
/* output come as object
why?
It's a bug in the 1st version of JavaScript. And still this is not fixed 
*/


// bulletproof way to check for null

const value = null;

if (value === null) {
  console.log('Value is strictly null');
}