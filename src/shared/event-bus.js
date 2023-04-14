import MessageBus from "./message-bus.js";

export default class EventBus {
  #messageBus;

  constructor(messageBus = new MessageBus()) {
    this.#messageBus = messageBus;
  }

  subscribe(eventType, subscriber) {
    return this.#messageBus.subscribe(eventType, subscriber);
  }

  unsubscribe(eventType, subscriber) {
    return this.#messageBus.unsubscribe(eventType, subscriber);
  }

  publish(event) {
    if (typeof event.type != "string") throw new Error("invalid event");
    return this.#messageBus.publish(event.type, event);
  }
}
