import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={292}
      height={495}
      viewBox="0 0 292 495"
      backgroundColor="#f3f3f3"
      foregroundColor="#d9d9d9"
    >
      <circle cx="140" cy="148" r="140" />
      <rect x="0" y="300" rx="0" ry="0" width="292" height="38" />
      <rect x="0" y="352" rx="0" ry="0" width="292" height="75" />
      <rect x="0" y="448" rx="0" ry="0" width="75" height="32" />
      <rect x="140" y="447" rx="21" ry="21" width="150" height="36" />
    </ContentLoader>
  );
}

export default LoadingBlock;
