const applyStyles = (classNameConfig: { [key: string]: boolean }) =>
  Object.entries(classNameConfig).reduce(
    (acc, [key, value]) => (value ? `${acc} ${key}` : acc),
    ''
  );

export default applyStyles;
