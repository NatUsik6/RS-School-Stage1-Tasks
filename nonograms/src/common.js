export const createElement = (tag, className, parent) => {
  const element = document.createElement(tag);
  element.className = className;
  parent.appendChild(element);

  return element;
};
