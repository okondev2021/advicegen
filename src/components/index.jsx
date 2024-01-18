import { useState, useEffect, useRef } from "react"
import patternDivider from '../assets/pattern-divider-desktop.svg'
import diceIcon from '../assets/icon-dice.svg'
import Loading from "./loading"

const Index = () => {

    const [advice, setAdvice] = useState(null)

    const buttonRef = useRef(null)

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => setAdvice(data.slip))
        .catch(err => {
            console.log('Error: check internet connection')
        })
    }

    useEffect( () => {
        getAdvice()
    }, [])

    const getAdviceBtn = () => {
        const button = buttonRef.current
        setAdvice(null)
        // 
        button.classList.add('cursor-not-allowed')
        button.classList.remove('cursor-pointer')
        // 
        setTimeout( () => {
            getAdvice()
        }, 500)
        // 
        setTimeout( () => {
            button.classList.remove('cursor-not-allowed')
        button.classList.add('cursor-pointer')
        }, 2000)
    }



    return (
        <div className=" w-[40%] bg-neutral-200 rounded-lg py-10 px-10 relative">
            <section className="font-bold text-cyann-200">
                <p className="text-center text-[10px] tracking-space">ADVICE #{advice?.id}</p>
            </section>
            <section className="text-[23px] font-bold text-center text-cyann-100 my-6">
                <h1>{advice ? `“${advice?.advice}”` : <Loading />}</h1>
            </section>
            <section className="mb-3">
                <img src={patternDivider} alt="" />
            </section>
            <section className="flex items-center justify-center">
                <button ref={buttonRef} onClick={getAdviceBtn} className="absolute flex items-center justify-center rounded-full cursor-pointer w-11 h-11 bg-cyann-200 -bottom-[10%]">
                    <img className="w-5 h-5" src={diceIcon} alt="" />
                </button>
            </section>
        </div>
    )
}

export default Index