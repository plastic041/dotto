import { type CSSProperties, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
// import { Canvas } from "~/src/components/canvas";
import { Canvas } from "~/src/components/canvas-canvas";
import { Arrow, Draw } from "~/src/components/controls/controls";
import { Cursor } from "~/src/components/controls/cursor.tsx";
import { css } from "~/styled-system/css";

const SIZE = 16;
const COLORS = [
  "46425e",
  "15788c",
  "00b9be",
  "ffeecc",
  "ffb0a3",
  "ff6973",
] as const;
const CANVAS_SIZE = 512;

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [art, setArt] = useState(() =>
    Array.from({ length: SIZE * SIZE }, () => randomInt(0, COLORS.length - 1))
  );

  function moveCursor(direction: "up" | "down" | "left" | "right") {
    switch (direction) {
      case "up":
        setY((y) => Math.max(0, y - 1));
        break;
      case "down":
        setY((y) => Math.min(SIZE - 1, y + 1));
        break;
      case "left":
        setX((x) => Math.max(0, x - 1));
        break;
      case "right":
        setX((x) => Math.min(SIZE - 1, x + 1));
        break;
      default: {
        // exhaustive check
        const _exhaustiveCheck: never = direction;
        return _exhaustiveCheck;
      }
    }
  }

  function drawPixel() {
    const i = y * SIZE + x;
    const newArt = [...art];
    newArt[i] = colorIndex;
    setArt(newArt);
  }

  useHotkeys("left, h", () => moveCursor("left"));
  useHotkeys("down, j", () => moveCursor("down"));
  useHotkeys("up, k", () => moveCursor("up"));
  useHotkeys("right, l", () => moveCursor("right"));
  useHotkeys("space", drawPixel);

  useHotkeys("1", () => setColorIndex(0));
  useHotkeys("2", () => setColorIndex(1));
  useHotkeys("3", () => setColorIndex(2));
  useHotkeys("4", () => setColorIndex(3));
  useHotkeys("5", () => setColorIndex(4));
  useHotkeys("6", () => setColorIndex(5));
  useHotkeys("7", () => setColorIndex(6));
  useHotkeys("8", () => setColorIndex(7));
  useHotkeys("9", () => setColorIndex(8));
  useHotkeys("0", () => setColorIndex(9));

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        bgColor: "gray.200",
      })}
    >
      <article
        className={css({
          p: 4,
          bgColor: "white",
          boxShadow: "lg",
          rounded: "sm",
        })}
      >
        <div
          className={css({
            position: "relative",
            width: `${CANVAS_SIZE}px`,
            height: `${CANVAS_SIZE}px`,
          })}
        >
          <Canvas size={SIZE} palette={COLORS} art={art} />
          <Cursor x={x} y={y} size={CANVAS_SIZE / SIZE} />
        </div>
      </article>
      <div
        className={css({
          w: "md",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 4,
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
          })}
        >
          <Arrow direction="left" onPress={() => moveCursor("left")} />
          <Arrow direction="down" onPress={() => moveCursor("down")} />
          <Arrow direction="up" onPress={() => moveCursor("up")} />
          <Arrow direction="right" onPress={() => moveCursor("right")} />
        </div>
        <Draw onPress={drawPixel} />
      </div>
      <div
        id="palette"
        className={css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 4,
          gap: 2,
        })}
      >
        {COLORS.map((color, i) => (
          <button
            type="button"
            key={color}
            className={css({
              width: "64px",
              height: "64px",
              rounded: "md",
              cursor: "pointer",
              bgColor: "var(--palette-color)",

              "&[data-selected='true']": {
                boxShadow: "0 0 0 4px black",
              },
            })}
            style={
              {
                "--palette-color": `#${color}`,
              } as CSSProperties
            }
            onClick={() => setColorIndex(i)}
            data-selected={i === colorIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
