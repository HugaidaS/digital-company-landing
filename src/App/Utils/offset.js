export const getOffset = (el) => {
  if (el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY - 450,
    };
  } else {
    return {
      left: 0,
      top: 0,
    };
  }
};
