const RESERVED_REGEX = /(?!=component:)\w+(?=,)/;
const NODE_TREE_RESERVED_REGEX = '';

const getComponent = (code: string) => {
  const component = code.match(RESERVED_REGEX);

  if (!component) {
    throw new Error(`Couldn't find component in "${code}"`);
  }

  return component[0];
}

const createComponent = (component: string, children?: string, props?: unknown) => {
  if (!children) {
    return `<${component} />`;
  }

  const nodeTree = [`<${component}>`, children, `</${component}>`];

  // TODO: Some crazy regex to prettify the node tree...
  return nodeTree.join("");
}

export const compiler = (code: string) => {
  const componentName = getComponent(code);
  const component = createComponent(componentName, "<p>Hello World</p>");

  console.log(component);
}