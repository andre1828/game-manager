import React from 'react'
import { useState } from "react";

function useParticipantesContext() {
    const [participantes, setParticipantes] = useState([])
    const ParticipantesContext = React.createContext()

    return { participantes, setParticipantes, ParticipantesContext }
}

export default useParticipantesContext