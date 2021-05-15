import React from 'react';
import type { SplitStringRange } from '../../splitStringAtPairedIndicies';

interface HighlightOverlayProps {
  highlightRanges: SplitStringRange[];
  highlightColor: string;
}

const HighlightOverlay = React.forwardRef<null, HighlightOverlayProps>(
  ({ highlightRanges, highlightColor }: HighlightOverlayProps, ref) => (
    <div className="text-display__highlight-overlay" ref={ref}>
      {highlightRanges &&
        highlightRanges.map(({ inRange, value }, k) =>
          inRange ? (
            <mark key={k} style={{ background: highlightColor }}>
              {value}
            </mark>
          ) : (
            <span key={k}>{value}</span>
          )
        )}
    </div>
  )
);

export default HighlightOverlay;
