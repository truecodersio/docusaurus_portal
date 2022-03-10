---
title: "Node Events Module"
slug: "/node-events"
---

## Why

Node.js is perfect for event-driven applications.

Every action on a computer is an event. Like when a connection is made or a file is opened. We can use the Node.js Events module to utilize our own events in our programs.

## What

Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

```js
const rs = fs.createReadStream("./demofile.txt");

rs.on("open", function () {
  console.log("The file is open");
});
```

### Events Module

Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the `require()` method. In addition, all event properties and methods are an instance of an `EventEmitter` object. To be able to access these properties and methods, create an `EventEmitter` object by importing and calling the `EventEmitter` contructor:

```js
const { EventEmitter } = require("events");

let eventEmitter = new EventEmitter();
```

### The EventEmitter Object

You can assign event handlers to your own events with the `EventEmitter` object.

In the example below we have created a function that will be executed when a "insert" event is fired.

To fire an event, use the `emit()` method.

```js
const eventEmitter = new EventEmitter();

// Create an event handler
const myEventHandler = (employee) => {
  console.log("Insert new employee to database*");
};

// Assign the event handler to the event
eventEmitter.on("insert", myEventHandler);

// Fire the 'insert' event
eventEmitter.emit("insert", { name: "Ben", role: "admin" });
```

Similar to JavaScript in the browser, we can add or remove event listeners. We can also dispatch, or emit, our own events.

Here’s a list of event methods:

- `eventEmitter.on(event, handler)` - adds an event listener to an event
- `eventEmitter.addListener(event, handler)` same as `eventEmitter.on()`
- `eventEmitter.emit(event)` - emits an event
- `eventEmitter.eventNames()` - returns an array of strings representing each event presently registered
- `eventEmitter.getMaxListeners()` - returns a number of the max number of event listeners for an event. The default max number of events is 10
- `eventEmitter.setMaxListeners()` - allows you to change the max number of event listeners per event
- `eventEmitter.listenerCount(event)` - returns a number of listeners per event
- `eventEmitter.listeners(event)` - returns an array of listeners of the event
- `eventEmitter.off(event, handler)` - removes an event listener from an event
- `eventEmitter.removeListener(event, handler)` - same as `eventEmitter.off()`
- `eventEmitter.once(event, handler)` - adds an event listener to an event that is only called once
- `eventEmitter.prependListener(event, handler)` - adds an event handler to an event that is called first, before any other event handler
- `eventEmitter.prependOnceListener(event, handler)` - adds an event handler to an event that is called first and only once, before any other event handler
- `eventEmitter.removeAllListeners(event)` - removes all event listeners of an event

## How

Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

For example, let's say you are creating a ticketing system. The common way to handle things might be like this:

```js
function addTicket(ticket, callback) {
  insertTicketIntoDatabase(ticket, (err) => {
    if (err) {
      return handleError(err);
    }

    callback();
  });
}
```

But now, someone has decided that when a ticket is inserted into the database, you should email the user to let them know. That's fine, you can add it to the callback:

```js
function addTicket(ticket, callback) {
  insertTicketIntoDatabase(ticket, (err) => {
    if (err) {
      return handleError(err);
    }

    emailUser(ticket, callback);
  });
}
```

But now, someone wants to also notify another system that the ticket has been inserted. Over time, there could be any number of things that should happen when a ticket is inserted. So let's change it around a bit:

```js
function addTicket(ticket, callback) {
  insertTicketIntoDatabase(ticket, (err) => {
    if (err) {
      return handleError(err);
    }

    TicketEvent.emit("inserted", ticket);

    callback();
  });
}
```

We no longer need to wait on all these functions to complete before we notify the user interface. And elsewhere in your code, you can add these functions easily:

```js
TicketEvent.on("inserted", (ticket) => {
  emailUser(ticket);
});

TicketEvent.on("inserted", (ticket) => {
  notifySlack(ticket);
});
```

## Takeaways

1. Node.js is event driven. We can harness the power of events by listening for, and handling events with functions
2. The `EventEmitter` class can be imported from the `events` module, and used to create our own `EventEmitter` instance for creating and handling events
3. Fire an event with the `emit("event")` method. Listen and handle an event with the `on("event", handleEvent)` method
