function SquareTimer({ duration, current }) {
  const size = 140;
  const stroke = 4;
  const normalizedSize = size - stroke * 2;
  const perimeter = normalizedSize * 4;
  const progress = (duration - current) / duration;
  const strokeDashoffset = perimeter * (1 - progress);

  return (
    <svg height={size} width={size}>
      {/* Background square (gray outline) */}
      <rect
        stroke="#939393"
        fill="transparent"
        strokeWidth={stroke}
        width={normalizedSize}
        height={normalizedSize}
        x={stroke}
        y={stroke}
      />
      {/* Progress square (black outline that fills up) */}
      <rect
        stroke="#191919"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={perimeter}
        strokeDashoffset={strokeDashoffset}
        width={normalizedSize}
        height={normalizedSize}
        x={stroke}
        y={stroke}
        transform={`rotate(90 ${size/2} ${size/2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="48"
        fill="rgb(32,38,38)"
      >
        {Math.ceil(current)}
      </text>
    </svg>
  );
}

export default SquareTimer; 