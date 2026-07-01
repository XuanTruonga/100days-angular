export function getGutterStyle(
  gutter: number | [number, number],
): Record<string, number> {
  const [horizontal, vertical] = Array.isArray(gutter) ? gutter : [gutter, 0];

  return {
    'padding-left.px': horizontal / 2,
    'padding-right.px': horizontal / 2,
    'padding-top.px': vertical / 2,
    'padding-bottom.px': vertical / 2,
  };
}
