export default function Button({ text, handleClick, style }) {
  return (
    <button
      className={`transform rounded-lg border border-black px-3 transition ${style}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
