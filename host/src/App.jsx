import './App.css'
import React, { Suspense } from 'react'

function App() {

const CRMApp = React.lazy(() => import('crm/CRMApp'));
const SCMApp = React.lazy(() => import('scm/SCMApp'));
const PMCApp = React.lazy(() => import('pmc/PMCApp'));

const openModule = (module)=>{
  if(module == 'crm'){
    window.open('http://localhost:5174/assets/crmEntry.js')
  }else if(module == 'scm'){
    window.open('http://localhost:5175/assets/scmEntry.js')
  }else{
    window.open('http://localhost:5176/assets/pmcEntry.js')
  }
}

  return (
    // <>9876556789</>
    <>
      <button onClick={()=>{openModule('crm')}}>CRM</button>
      <button onClick={()=>{openModule('scm')}}>SCM</button>
      <button onClick={()=>{openModule('pmc')}}>PMC</button>
      {/* <Suspense fallback={<div>Loading CRM...</div>}>
        <CRMApp />
      </Suspense>

      <Suspense fallback={<div>Loading SCM...</div>}>
        <SCMApp />
      </Suspense>

      <Suspense fallback={<div>Loading PMC...</div>}>
        <PMCApp />
      </Suspense> */}
    </>
  )
}

export default App
