import React from 'react'

import RegistrationsTable from './RegistrationTable/RegistrationTable'

const RegistrationsAll = () => {
  return (
    <div className="App">
            <header className="bg-red-600 text-white p-4">
                <h1 className="text-3xl">Course Registrations</h1>
            </header>
            <main className="p-4">
                <RegistrationsTable />
            </main>
        </div>
  )
}

export default RegistrationsAll