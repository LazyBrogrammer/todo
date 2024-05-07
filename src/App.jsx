import { useState } from 'react';
import { Header } from './components/Header';

export const App = () => {
  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? 'dark' : ''}>
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
};
