import React, { useRef, useEffect } from 'react';
import './EmojiBoxes.css';

function EmojiBoxes({ emojis, attempt, showResult, message }) {
    const boxRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const tryAudioRef = useRef(null);

    useEffect(() => {
        tryAudioRef.current = new Audio('/assets/tentativa.mp3');
        tryAudioRef.current.preload = 'auto';
        tryAudioRef.current.load();
    }, []);

    const playTrySound = () => {
        const audio = tryAudioRef.current;
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => { });
        }
    };

    useEffect(() => {
        if (attempt >= 0 && attempt < 4 && !showResult) {
            const box = boxRefs[attempt].current;
            if (box) {
                playTrySound();

                box.animate([
                    { transform: 'rotateY(0deg)', filter: 'blur(0px)' },
                    { offset: 0.3, filter: 'blur(4px)' },
                    { offset: 0.7, filter: 'blur(4px)' },
                    { transform: 'rotateY(360deg)', filter: 'blur(0px)' }
                ], {
                    duration: 600,
                    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
                });
            }
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [attempt, showResult]);

    return (
        <div className="emoji-boxes-container">
            {[0, 1, 2, 3].map(i => {
                const isRevealed = showResult && message.startsWith('Acertou!') ? true : i <= attempt;
                let extraClass = '';
                if (showResult && message.startsWith('Acertou!')) {
                    extraClass = i <= attempt ? 'emoji-box-blue' : 'emoji-box-green';
                } else if (i <= attempt) {
                    extraClass = 'emoji-box-blue';
                }

                let content = '?';
                if (isRevealed) {
                    const emoji = emojis[i];
                    if (emoji?.type === 'flag') {
                        content = (
                            <img
                                src={`https://hatscripts.github.io/circle-flags/flags/${emoji.code}.svg`}
                                alt={emoji.code}
                                className="emoji-flag-img"
                            />
                        );
                    } else {
                        content = emoji;
                    }
                }

                return (
                    <div
                        key={i}
                        ref={boxRefs[i]}
                        className={`emoji-box ${extraClass}`}
                    >
                        {content}
                    </div>
                );
            })}
        </div>
    );
}

export default EmojiBoxes;
