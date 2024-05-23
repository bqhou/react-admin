// eslint-disable-next-line no-unused-vars
import React , { useContext } from 'react';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'


import Team from './scenes/team'
import Dashboard from './scenes/dashboard'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Calendar from './scenes/calendar'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import {ColorModeContext, useMode} from './theme'
import {CssBaseline} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom';
//In MUI V5 you need to import ThemeProvider and createTheme from @mui/material/styles instead of @mui/styles.
//import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [theme,colorMode]=useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="app">
          <Sidebar/>
          <main className='content'>
            <Topbar></Topbar>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
              <Route path='/invoices' element={<Invoices/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/faq' element={<FAQ/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/line' element={<Line/>}/>
              <Route path='/geography' element={<Geography/>}/> 
              {/* 
              
            
             
             
            
              
              */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
