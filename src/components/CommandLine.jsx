import PropTypes from 'prop-types';

export const CommandLine = ({ command, showPrompt }) => {
  return (
    <div className="flex items-center text-green-400">
      <span className="mr-2">$</span>
      <span>{command}</span>
      {showPrompt && <span className="ml-1">█</span>}
    </div>
  );
};

// Add PropTypes validation
CommandLine.propTypes = {
    command: PropTypes.any,
    showPrompt: PropTypes.any,
};
  