import { useState, useEffect } from "react"
import patternDivider from '../assets/pattern-divider-desktop.svg'
import diceIcon from '../assets/icon-dice.svg'
import Loading from "./loading"

const Index = () => {

    const [advice, setAdvice] = useState(null)

    const getAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => setAdvice(data.slip))
    }

    useEffect( () => {
        getAdvice()
    }, [])


    return (
        <div className=" w-[40%] bg-neutral-200 rounded-lg py-10 px-10 relative">
            <section className="font-bold text-cyann-200">
                <p className="text-center text-xxsm tracking-space">ADVICE #{advice?.id}</p>
            </section>
            <section className="text-[23px] font-bold text-center text-cyann-100 my-6">
                <h1>{advice ? `“${advice?.advice}”` : <Loading />}</h1>
            </section>
            <section className="mb-3">
                <img src={patternDivider} alt="" />
            </section>
            <section className="flex items-center justify-center">
                <div onClick={getAdvice} className="absolute flex items-center justify-center rounded-full cursor-pointer w-11 h-11 bg-cyann-200 -bottom-[10%]">
                    <img className="w-5 h-5" src={diceIcon} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Index