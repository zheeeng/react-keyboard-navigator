/**
 * @title Interest Gallery
 * @order 3
 */
import { useState, useMemo } from 'react'
import { KeyboardNavigatorBoard, KeyboardNavigatorElement, useKeyboardNavigator } from 'react-keyboard-navigator'
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'
import './interestGallery.scss'

const InterestGallery = () => {
    const [interests, setInterests] = useState(() => new Set([
        'city', 'nature', 'night', 'forest', 'lake', 'mountain', 'sky', 'train',
        'japan', 'korea', 'china', 'india', 'thailand', 'vietnam', 'cambodia',
        'book', 'movie', 'music', 'game', 'sport', 'food', 'painting',
        'dog', 'cat', 'bird', 'fish', 'horse', 'cow',
    ]))

    const handleAddInterest = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const newInterest = e.currentTarget.value
            e.currentTarget.value = ''
            setInterests(new Set(interests.add(newInterest)))
        }
    }

    const handleRemoveInterest = (oldInterest: string) => {
        const ok = confirm('Are you sure you want to remove this interest?')

        if (ok) {
            setInterests(new Set((interests.delete(oldInterest), interests)))
        }
    }

    const [activePictureName, setActivePictureName] = useState('')

    const { markRef } = useKeyboardNavigator({
        rootContainer: document.body,
        didChange: (_, toElement) => scrollIntoViewIfNeeded(toElement, { scrollMode: 'if-needed', behavior: 'smooth', block: 'nearest' })
    })

    const sortedInterests = useMemo(() => Array.from(interests.values()).sort((a, b) => a.localeCompare(b)), [interests])

    return (
        <div className="interestGallery">
            <KeyboardNavigatorBoard as="main" markRef={markRef}>
                <section className="simple-style">
                    <section>
                        <label>
                            Add new interest:
                            <input onKeyDown={handleAddInterest}></input>
                        </label>
                    </section>
                </section>

                {sortedInterests.map(interest => (
                    <KeyboardNavigatorElement
                        as="figure" markRef={markRef} key={interest}
                        className={interest === activePictureName ? 'active' : ''}
                        onClick={() => setActivePictureName(interest) }
                        active={interest === activePictureName} onActiveChange={() => setActivePictureName(interest)}
                    >
                        <img src={`https://source.unsplash.com/random/200x200/?${interest}`} width="200" height="200" loading="lazy" alt={interest}/>
                        <figcaption>
                            <div className="text">{interest}</div>
                            <div  className="closer" onClick={() => handleRemoveInterest(interest)}>❌</div>
                        </figcaption>
                    </KeyboardNavigatorElement>
                ))}
            </KeyboardNavigatorBoard>
        </div>
    )
}

export default InterestGallery
