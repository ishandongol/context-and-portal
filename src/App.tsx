import React, { useState } from 'react';
import './App.css';
import Portal from './Portal';
import Modal from './Modal'
import { ThemeConsumer, ThemeProvider, ProtalProvider, PortalConsumer } from './Context';
import SettingsPortal from './SettingsPortal';
import NotifyPortal from './NotifyPortal';

const App: React.FC = () => {

  const [modal, toggleModal] = useState<boolean>(false)
  const [theme, toggleTheme] = useState<string>('dark')
  const [portal, uPortal] = useState<boolean>(true);
  const [settings, toggleSettings] = useState<boolean>(false);

  const settingButtons = () => (
    <>
      <button onClick={changeTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
      <button onClick={toggleProtal}>{portal ? 'Disable Portal' : 'Enable Portal'}</button>
      <button onClick={resetToDefault}>Reset</button>
    </>
  )

  const handleClick = () => {
    toggleModal(!modal)
  }
  const changeTheme = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const toggleProtal = () => {
    uPortal(!portal)
  }
  const resetToDefault = () => {
    uPortal(true)
    toggleTheme('dark')
    toggleSettings(false)
  }
  const handleShowButton = () => {
    toggleSettings(!settings)
  }
  return (
    <>
      <SettingsPortal>
        {!modal && <button onClick={handleShowButton}>{settings ? 'Hide Buttons' : 'Show Buttons'}</button>}
        {settingButtons()}
      </SettingsPortal>
      <ThemeProvider value={theme}>
        <ProtalProvider value={portal}>
          <ThemeConsumer>
            {(value) => (
              <div className={`App ${value}`}>
                <header className="App-header">
                  <button onClick={handleClick}>Show Modal</button>
                  {settings && settingButtons()}
                  {
                    modal &&
                    <PortalConsumer>
                      {(usePortal) => (
                        usePortal ?
                          <Portal>
                            <Modal toggleModal={handleClick} />
                          </Portal>
                          : <Modal toggleModal={handleClick} />
                      )}
                    </PortalConsumer>
                  }
                </header>
              </div>
            )}
          </ThemeConsumer>
        </ProtalProvider>
      </ThemeProvider>
      {
        settings
        &&
        <NotifyPortal>
          {modal ? <img src="./cal.gif" /> : <img src="./oops.gif" />}
        </NotifyPortal>
      }
    </>
  );
}

export default App;
