import React, { useState, useRef } from 'react'
import './AnswerInput.css'
import Button from '../Button.jsx'

function AnswerInput({ input, onInputChange, onSubmit, agentNames }) {
  const [suggestions, setSuggestions] = useState([])
  const inputRef = useRef(null)

  function handleInput(e) {
    onInputChange(e)
    const value = e.target.value.toLowerCase()
    if (value) {
      setSuggestions(agentNames.filter(name => name.toLowerCase().includes(value)))
    } else {
      setSuggestions([])
    }
  }

  function handleSuggestionClick(name) {
    onInputChange({ target: { value: name } })
    setSuggestions([])
  }

  function handleFocus() {
    setSuggestions(agentNames)
  }

  function handleBlur() {
    setTimeout(() => setSuggestions([]), 100)
  }

  return (
    <div className="answer-input-container">
      <input
        id="guess"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Digite o nome do agente"
        onKeyDown={e => e.key === 'Enter' && onSubmit()}
        ref={inputRef}
        autoComplete="off"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {suggestions.length > 0 && (
        <div id="suggestions" className="suggestions-list">
          {suggestions.slice().sort((a, b) => a.localeCompare(b)).map(name => (
            <div
              key={name}
              className="suggestion"
              onMouseDown={() => handleSuggestionClick(name)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
      <Button onClick={onSubmit} text="Responder" /> 
    </div>
  )
}

export default AnswerInput
