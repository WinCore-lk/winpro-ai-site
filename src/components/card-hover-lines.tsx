"use client";

/** 
 * Enhanced grid lines and tiles overlay for .card-surface-hover (Aaron Iker style). 
 * Place as first child of the card. 
 */
export function CardHoverLines() {
  return (
    <div className="card-hover-bg" aria-hidden>
      <div className="tiles">
        <div className="tile tile-1"></div>
        <div className="tile tile-2"></div>
        <div className="tile tile-3"></div>
        <div className="tile tile-4"></div>
        <div className="tile tile-5"></div>
        <div className="tile tile-6"></div>
        <div className="tile tile-7"></div>
        <div className="tile tile-8"></div>
        <div className="tile tile-9"></div>
        <div className="tile tile-10"></div>
      </div>

      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
    </div>
  );
}
