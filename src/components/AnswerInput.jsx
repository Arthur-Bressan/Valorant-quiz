import React from 'react'
import './AnswerInput.css'
import Button from '../Button.jsx'

function AnswerInput({ input, onInputChange, onSelectChange, onSubmit, agentNames }) {
  return (
    <div className="answer-input-container">
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        placeholder="Digite o nome do agente"
        onKeyDown={e => e.key === 'Enter' && onSubmit()}
      />
      <select
        value={input}
        onChange={onSelectChange}
      >
        <option value="">Escolha um agente</option>
        {agentNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <Button onClick={onSubmit} text="Responder" />
    </div>
  )
}

export default AnswerInput
