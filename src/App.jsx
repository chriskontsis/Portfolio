import { useState, useEffect } from 'react';
import { CommandLine } from './components/CommandLine';
import { MonitorFrame } from './components/MonitorFrame';
import { CommandButton } from './components/CommandButton';
import { 
  WhoamiContent, 
  WorkContent, 
  ProjectsContent, 
  BlogContent, 
  HelpContent 
} from './components/ContentRenderers';
import { portfolioData } from './data/portfolio';

function App() {
  const [setActiveCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState(['whoami']);
  const [showPrompt, setShowPrompt] = useState(true);

  const commands = {
    whoami: () => <WhoamiContent data={portfolioData} />,
    work: () => <WorkContent work={portfolioData.work} />,
    projects: () => <ProjectsContent projects={portfolioData.projects} />,
    blog: () => <BlogContent blog={portfolioData.blog} />,
    help: () => <HelpContent />,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrompt(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  const handleCommand = (cmd) => {
    setCommandHistory(prev => [...prev, cmd]);
    setActiveCommand(cmd);
  };

  const clearTerminal = () => {
    setCommandHistory(['whoami']);
    setActiveCommand('whoami');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <MonitorFrame>
          <div className="bg-gray-900 p-6 min-h-[600px] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-scanline pointer-events-none"></div>
            
            <div className="space-y-6">
              {commandHistory.map((cmd, index) => (
                <div key={index}>
                  <CommandLine command={cmd} showPrompt={false} />
                  {commands[cmd] && commands[cmd]()}
                </div>
              ))}
            </div>

            <CommandLine command="" showPrompt={showPrompt} />
          </div>
        </MonitorFrame>

        <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-6">
          {Object.keys(commands).map((cmd) => (
            <CommandButton key={cmd} command={cmd} onClick={() => handleCommand(cmd)} />
          ))}
          <CommandButton command="clear" onClick={clearTerminal} />
        </div>
      </div>
    </div>
  );
}

export default App;