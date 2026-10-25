// Style for an element coloured by its background and shaped by an alpha-mask image.
export function maskStyle(file: string, ratio?: string, size = "contain", position = "center"): React.CSSProperties {
  const url = `url(${file})`;
  return {
    aspectRatio: ratio,
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: size,
    maskSize: size,
    WebkitMaskPosition: position,
    maskPosition: position,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  };
}
