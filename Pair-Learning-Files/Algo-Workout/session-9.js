/*############################
SESSION 9 | Feb 28
############################
*/
// build a rate limiter

// tiers? no, for now
// variable for lockout time.

const pings = {}; // id -> { count, start }
const MAX_PINGS = 3;
const RESET_INTERVAL = 1000; // ms

class Time {
  forceTime(ms) {
    if (ms < this._time) throw new Error('no time travel allowed');
    this._time = ms;
  };
  
  now() {
    return this._time ? this._time : Date.now();
  };
};

const t = new Time();

function isRateLimited(id) {
  const now = t.now();
  
  if (now > lastReset + 1000) pings = {};

  if (pings[id] && pings[id].start + RESET_INTERVAL > now) {
    pings[id].count++;
  } else {
    // new user / count
    pings[id] = {
      count: 1,
      start: now
    };
  }
  return pings[id].count > MAX_PINGS;
}

t.forceTime(1);
console.log(isRateLimited('derrick'), 'false expected');
console.log(isRateLimited('deontee'), 'false expected');
for (let i = 0; i < 3; i++) isRateLimited('derrick');
console.log(isRateLimited('derrick'), 'true expected');
console.log(isRateLimited('deontee'), 'false expected');

t.forceTime(2000);
console.log(isRateLimited('derrick'), 'false expected');
