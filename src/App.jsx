import React, { useState } from 'react'
import './App.css'
import Button from './Button.jsx'
import EmojiBoxes from './components/EmojiBoxes.jsx'
import AnswerInput from './components/AnswerInput.jsx'

const quizData = [
	{
		agent: 'Jett',
		emojis: ['💨', { type: 'flag', code: 'kr' }, '🔪', '🌀'],
	},
	{
		agent: 'Phoenix',
		emojis: ['🔥', '🦅', { type: 'flag', code: 'gb' }, '🟠'],
	},
	{
		agent: 'Reyna',
		emojis: ['👑', '👁️', { type: 'flag', code: 'mx' }, '💜'],
	},
	{
		agent: 'Sage',
		emojis: ['🧊', '🧱', { type: 'flag', code: 'cn' }, '❄'],
	},
	{
		agent: 'Cypher',
		emojis: ['🎩', '🥼', { type: 'flag', code: 'ma' }, '👁‍🗨'],
	},
	{
		agent: 'Deadlock',
		emojis: ['❄', '🛡', { type: 'flag', code: 'no' }, '🔈'],
	},
	{
		agent: 'Iso',
		emojis: ['👨🏻', '🔫', { type: 'flag', code: 'cn' }, '🛡️'],
	},
	{
		agent: 'Clove',
		emojis: ['💋', '💀', { type: 'flag', code: 'gb' }, '🟣'],
	},
	{
		agent: 'Gekko',
		emojis: ['🦎', '🟢', { type: 'flag', code: 'us' }, '🦜'],
	},
	{
		agent: 'Harbor',
		emojis: ['🌊', '🛡️', { type: 'flag', code: 'in' }, '💧'],
	},
	{
		agent: 'Fade',
		emojis: ['🌑', '🐱', { type: 'flag', code: 'tr' }, '⚫'],
	},
	{
		agent: 'Neon',
		emojis: ['⚡', '🏃‍♀️', { type: 'flag', code: 'ph' }, '🔵'],
	},
	{
		agent: 'Chamber',
		emojis: ['🕴️', '🔫', { type: 'flag', code: 'fr' }, '💼'],
	},
	{
		agent: 'KAY/O',
		emojis: ['🤖', '🔪', '💡', '💥'],
	},
	{
		agent: 'Astra',
		emojis: ['🌌', '⭐', { type: 'flag', code: 'gh' }, '🟣'],
	},
	{
		agent: 'Yoru',
		emojis: ['🌀', '🗡️', { type: 'flag', code: 'jp' }, '👟'],
	},
	{
		agent: 'Skye',
		emojis: ['🦜', '🌱', { type: 'flag', code: 'au' }, '🐺'],
	},
	{
		agent: 'Breach',
		emojis: ['💥', '🦾', { type: 'flag', code: 'se' }, '🌊'],
	},
	{
		agent: 'Killjoy',
		emojis: ['🐔', '🟡', { type: 'flag', code: 'de' }, '🛡️'],
	},
	{
		agent: 'Sova',
		emojis: ['🏹', '⚡', { type: 'flag', code: 'ru' }, '❄️'],
	},
	{
		agent: 'Brimstone',
		emojis: ['🧔🏻', '☁️', { type: 'flag', code: 'us' }, '🔥'],
	},
	{
		agent: 'Viper',
		emojis: ['🧪', '☠️', { type: 'flag', code: 'us' }, '🟢'],
	},
	{
		agent: 'Omen',
		emojis: ['🌫️', '👻', '🟣', '👁️'],
	},
	{
		agent: 'Tejo',
		emojis: ['😎', '🤖', { type: 'flag', code: 'co' }, '💥'],
	},
	{
		agent: 'Waylay',
		emojis: ['🟡', '💨', { type: 'flag', code: 'th' }, '🕐'],
	},
	{
		agent: 'Vyse',
		emojis: ['🌹', '🧱', '👁️', '🔫'],
	},
]

function shuffleArray(array) {
	const arr = [...array]
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
			;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}

function App() {
	const Correct_audio = new Audio('/assets/certo.wav')
	const Wrong_audio = new Audio('/assets/errado.wav')
	const Try_audio = new Audio('/assets/tentativa.mp3')

	const [quizOrder] = useState(() => shuffleArray(quizData))
	const [current, setCurrent] = useState(0)
	const [attempt, setAttempt] = useState(0)
	const [input, setInput] = useState('')
	const [score, setScore] = useState(0)
	const [showResult, setShowResult] = useState(false)
	const [message, setMessage] = useState('')
	const [lastGuess, setLastGuess] = useState('')
	const [shuffledEmojis, setShuffledEmojis] = useState(() => shuffleArray(quizOrder[0].emojis))

	const question = quizOrder[current]
	const maxPoints = question.emojis.length
	const agentNames = quizOrder.map(q => q.agent)

	function handleInput(e) {
		setInput(e.target.value)
	}

	function handleSelect(e) {
		setInput(e.target.value)
	}

	function checkAnswer() {
		if (!input.trim()) {
			return
		}

		// Verifica se o chute é um agente válido
		const isValidAgent = agentNames.some(
			agent => agent.toLowerCase() === input.trim().toLowerCase()
		)
		if (!isValidAgent) {
			setMessage('Digite o nome de um agente válido do Valorant!')
			return
		}

		if (input.trim().toLowerCase() === question.agent.toLowerCase()) {
			const points = maxPoints - attempt
			Correct_audio.currentTime = 0
			Correct_audio.play()
			setScore(score + points)
			setMessage(`Acertou! Era ${question.agent}. Pontos: +${points}`)
			setShowResult(true)
			setLastGuess(input.trim())
			setInput('')
		} else if (attempt < maxPoints - 1) {
			setAttempt(attempt + 1)
			setMessage('Tente novamente!')
			setLastGuess(input.trim())
			setInput('')
		} else {
			Wrong_audio.currentTime = 0
			Wrong_audio.play()
			setMessage(`Errou! Era ${question.agent}.`)
			setShowResult(true)
			setLastGuess(input.trim())
			setInput('')
		}
	}

	function nextQuestion() {
		if (current < quizOrder.length - 1) {
			setCurrent(current + 1)
			setAttempt(0)
			setShowResult(false)
			setMessage('')
			setInput('')
		} else {
			setMessage(`Fim do quiz! Pontuação final: ${score}`)
			setShowResult(false)
		}
	}

	React.useEffect(() => {
		setShuffledEmojis(shuffleArray(question.emojis))
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [current])

	return (
		<div className="card">
			<h1>Quiz de Valorant</h1>
			<h3>Acerte o Agente com os emojis.</h3>
			<EmojiBoxes
				emojis={shuffledEmojis}
				attempt={attempt}
				showResult={showResult}
				message={message}
			/>
			{!showResult && (
				<AnswerInput
					input={input}
					onInputChange={handleInput}
					onSelectChange={handleSelect}
					onSubmit={checkAnswer}
					agentNames={agentNames}
				/>
			)}
			<div style={{ margin: '1rem', minHeight: '2rem' }}>{message}</div>
			{showResult && current < quizOrder.length - 1 && (
				<Button onClick={nextQuestion} text="Próxima pergunta" />
			)}
			<footer style={{ marginTop: '2rem', textAlign: 'center', color: '#888' }}>
				<div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
					Pergunta {current + 1} de {quizOrder.length}
				</div>
				<div style={{ marginTop: '0.5rem', color: '#888' }}>
					Última resposta: {lastGuess || 'Nenhuma'}
				</div>
				<div style={{ marginTop: '0.5rem', color: '#888' }}>Pontuação: {score}</div>
			</footer>
		</div>
	)
}

export default App
