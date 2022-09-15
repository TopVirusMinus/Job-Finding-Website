const Accordion = ({ title, body, containerClass, parentId, id, flushId }) => {
  return (
    <div
      className={`accordion accordion-flush border ${containerClass}`}
      id={parentId}
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id={flushId}>
          <button
            className="accordion-button collapsed  fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="false"
            aria-controls={id}
          >
            {title}
          </button>
        </h2>
        <div
          id={id}
          className="accordion-collapse collapse"
          aria-labelledby={flushId}
          data-bs-parent={`#${parentId}`}
        >
          <div className="accordion-body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
