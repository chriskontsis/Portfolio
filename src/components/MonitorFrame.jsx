import PropTypes from 'prop-types';
import { Monitor } from 'lucide-react';

export const MonitorFrame = ({ children }) => {
  return (
    <div className="border-4 border-gray-700 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-gray-800 p-2 flex items-center justify-between">
        <div className="flex items-center">
          <Monitor className="w-4 h-4 text-green-400 mr-2" />
          <span className="text-green-400 text-sm">terminal_portfolio v1.0</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

// Add PropTypes validation
MonitorFrame.propTypes = {
    children: PropTypes.any,
};