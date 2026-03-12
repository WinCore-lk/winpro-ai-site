"use client";

import React from "react";
import styles from "./rubik-cube.module.css";

const RubikCube = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full min-h-[400px]"
      aria-hidden="true"
      role="presentation"
    >
      <div className={styles.container}>
        {[0, 1, 2].map((cubeIndex) => (
          <div key={cubeIndex} className={styles.cube}>
            {[-1, 0, 1].map((x) => (
              <div
                key={x}
                style={{ "--x": x, "--y": 0 } as React.CSSProperties}
              >
                {[3, 2, 1].map((i) => (
                  <span
                    key={i}
                    style={{ "--i": i } as React.CSSProperties}
                  ></span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { RubikCube };
