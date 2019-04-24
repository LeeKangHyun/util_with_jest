import React from 'react'

import useScript from './customHooks'

const useScriptComponent = () => {
  const [loaded, error] = useScript('https://pm28k14qlj.codesandbox.io/test-external-script.js')
  return (
    <div>
      Script loaded: <b>{loaded.toString()}</b>
      {/* eslint-disable-next-line no-undef */}
      {loaded && !error && TEST_SCRIPT && (
        <div>
          {/* eslint-disable-next-line no-undef */}
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  )
}

export default useScriptComponent
