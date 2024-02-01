export const createElement = (tag, className, parent) => {
  const element = document.createElement(tag);
  element.className = className;
  parent.append(element);

  return element;
};

export const createPreElement = (tag, className, parent) => {
  const element = document.createElement(tag);
  element.className = className;
  parent.prepend(element);

  return element;
};
