import { useEffect, useRef } from "react";

function hexToRgb(hex: number) {
  const r = (hex >> 16) & 0xff;
  const g = (hex >> 8) & 0xff;
  const b = hex & 0xff;
  return [r, g, b];
}

type CanvasProps = {
  /**
   * Size of the canvas: width and height
   */
  size: number;
  /**
   * Pixel art data. Array of numbers, each number represents an index of color in the palette
   */
  art: number[];
  /**
   * Palette of colors
   */
  palette: readonly string[];
};
/**
 * Canvas version of pixel art viewer
 */
export function Canvas({ size, art, palette }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);

    for (let i = 0; i < art.length; i++) {
      // const color = art[i];
      // const x = i % size;
      // const y = Math.floor(i / size);
      // const index = (x + y * size) * 4;
      // const [r, g, b] = color === -1 ? [0, 0, 0, 0] : hexToRgb(color);
      // imageData.data[index] = r;
      // imageData.data[index + 1] = g;
      // imageData.data[index + 2] = b;
      // imageData.data[index + 3] = 255;
      const hex = palette[art[i]];
      const x = i % size;
      const y = Math.floor(i / size);
      const index = (x + y * size) * 4;
      const [r, g, b] = hexToRgb(parseInt(hex, 16));
      imageData.data[index] = r;
      imageData.data[index + 1] = g;
      imageData.data[index + 2] = b;
      imageData.data[index + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }, [size, art, palette]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
      }}
    />
  );
}
