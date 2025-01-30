  import React, { Fragment } from 'react'

import Netflix, {Footer} from './components/Netflix'
import { Lifting } from './components/Lifting'
import ToggleSwitch from './components/ToggleSwitch'
import Effect from './components/Effect'
import ChallengeEffect from './components/ChallengeEffect'
import Youtubesub from './components/Youtubesub'
import FetchAPI from './FetchAPI'
import Pokemon from './Pokemon'
import UseRef from './UseRef'
import UseID from './hooks/useid/UseID'
import { BioProvider } from './hooks/usecontext/context'
import Home from './hooks/usecontext/Home'
import { ThemeProvider } from './hooks/dark-light/context'
import DarkLight from './hooks/dark-light/DarkLight'
import Increment from './useReducer/Increment'
import ReactMemo from './hooks/useid/useMemo/ReactMemo'
import MemoParentComponent from './hooks/useid/useMemo/useMemo'
import Parent from './hooks/useid/useMemo/useMemo'


  const App = () => {
    return (

<>
        {/* <h1  className='card-heading'>List of series</h1>
         <Netflix/> */}

         {/* <Lifting/> */}

         {/* <ToggleSwitch/> */}

         {/* <Effect/> */}

         {/* <Youtubesub/> */}

         {/* <FetchAPI/> */}

         {/* <Pokemon/> */}

         {/* <UseRef/> */}

         {/* <UseID/> */}
{/* 
         <BioProvider>
            <Home/>
         </BioProvider> */}
{/* 
         <ThemeProvider>
          <DarkLight/>
         </ThemeProvider> */}

         {/* <Increment/> */}

         <ReactMemo/>
           
           {/* <Parent /> */}

         </>
    )
  }

  export default App





