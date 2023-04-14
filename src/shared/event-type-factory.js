let generateId = () => "";
let createMetadata = () => ({});

const createEventType = (type, dataStructure) => {
  const Event = function (data) {
    const containsInvalidFields = Object.keys(dataStructure).some(
      (property) => {
        const dataTypes = [].concat(dataStructure[property]);
        return dataTypes.every((dataType) => typeof data[property] != dataType);
      }
    );
    if (containsInvalidFields)
      throw new TypeError(
        `expected data structure: ${JSON.stringify(dataStructure, null, 2)}`
      );
    Object.assign(this, {
      type,
      data,
      id: generateId(),
      metadata: createMetadata(),
    });
  };
  Event.type = type;
  return Event;
};

const setIdGenerator = (idGenerator) => (generateId = idGenerator);

const setMetadataProvider = (metadataProvider) =>
  (createMetadata = metadataProvider);

const eventTypeFactory = {
  createEventType,
  setIdGenerator,
  setMetadataProvider,
};

export { eventTypeFactory as default, createEventType };
