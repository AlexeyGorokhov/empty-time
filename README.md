# empty-time

Sets the time component of a Date object to either 00:00:00.000 or 23:59:59.999

```javascript
const emptyTime = require('empty-time');

const now = new Date();
emptyTime(now); // sets time to 00:00:00.000
emptyTime.toDayEnd(now); // sets time to 23:59:59.999
```

## Installation

```bash
$ npm install empty-time --save
```
