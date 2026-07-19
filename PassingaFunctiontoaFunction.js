function repeat(times, action) {
 for (let i = 1; i <= times; i++) {
 action(i);
 }
}
repeat(3, (n) => console.log(`Tick ${n}`));