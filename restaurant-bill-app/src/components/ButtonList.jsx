import PropTypes from "prop-types";

function ButtonList({ items, onButtonClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <h1>Button List</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onButtonClick(item)}
            style={{ padding: "8px 16px", cursor: "pointer" }}
          >
            {item.label}
          </button>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}
ButtonList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default ButtonList;
