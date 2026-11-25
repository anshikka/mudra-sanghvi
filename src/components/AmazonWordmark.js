import "./AmazonWordmark.css";

function AmazonWordmark({ text = "mudazon" }) {
  return (
    <span className="amazon-wordmark">
      <span className="amazon-wordmark-text">{text}</span>
      <svg
        className="amazon-smile"
        viewBox="0 0 120 18"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M4 3 Q 60 17 110 5"
          fill="none"
          stroke="#FF9900"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path d="M102 1 L116 4 L107 13 Z" fill="#FF9900" />
      </svg>
    </span>
  );
}

export default AmazonWordmark;
