import PropTypes from "prop-types";

export const CommandButton = ({ command, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-sm border border-green-400 rounded 
                  text-green-400 hover:bg-green-400 hover:text-gray-900 
                  transition duration-200 uppercase tracking-wider"
    >
      {command}
    </button>
  );
};

// Add PropTypes validation
CommandButton.propTypes = {
  command: PropTypes.any,
  onClick: PropTypes.any,
};
