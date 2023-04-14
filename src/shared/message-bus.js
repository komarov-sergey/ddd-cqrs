export default class MessageBus {
  #subscribersByTopic = new Map();

  subscribe(topic, subscriber) {
    const newSubscribers = this.#getSubscribers(topic).concat([subscriber]);
    this.#subscribersByTopic.set(topic, newSubscribers);
  }

  unsubscribe(topic, subscriber) {
    const subscribers = this.#getSubscribers(topic).slice();
    subscribers.splice(subscribers.indexOf(subscriber), 1);
    this.#subscribersByTopic.set(topic, subscribers);
  }

  async publish(topic, message) {
    await Promise.all(
      this.#getSubscribers(topic).map(
        (subscriber) =>
          new Promise((resolve) =>
            setTimeout(() => {
              Promise.resolve(subscriber(message)).then(resolve);
            })
          )
      )
    );
  }

  #getSubscribers(topic) {
    return this.#subscribersByTopic.get(topic) || [];
  }
}
