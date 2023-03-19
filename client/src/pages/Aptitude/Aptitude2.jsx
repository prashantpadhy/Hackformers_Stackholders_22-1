import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {detailed} from './questions2'
import './Aptitude.css'

function Aptitude2({result , setResult}) {

    const Navigate = useNavigate()
    const [activeQuestion, setActiveQuestion] = useState(0)   //current Question Number
    const [selectedAnswer, setSelectedAnswer] = useState(0)   //current Question Selected Option
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
   

    // const { questions } = basic
    const {questions1 } = detailed
    var sorted = []
    for(var q in result){
        sorted.push([q , result[q]])
    }
    sorted.sort((a,b)=>b[1]-a[1])
    console.log(sorted)
    var new_sorted = []
    for(var s of sorted){
        console.log(s)
        new_sorted.push(s[0])
    }
    console.log(new_sorted)
    console.log(questions1)
    questions1.sort(function(a,b){
        console.log(a.type)
        return new_sorted.indexOf(a.type) - new_sorted.indexOf(b.type) 
    })
    console.log(questions1)
    const { question, choices, type } = questions1[activeQuestion]
    // const { question1, choices1, type1 } = questions1[activeQuestion-9]

    const handleLast = ()=>{
        console.log(result)
        Navigate('/result')
    }

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        if (type === 'web') {
            setResult((prev) =>
                selectedAnswer === 0
                    ? {
                        ...prev,
                        web: prev.web + 2,

                    }
                    : selectedAnswer === 1 ? { ...prev, web: prev.web + 1 } : { ...prev, web: prev.web + 0 }
            )

        }
        else if(type === 'bc'){
            setResult((prev) =>
                selectedAnswer === 0
                    ? {
                        ...prev,
                        bc: prev.bc + 2,

                    }
                    : selectedAnswer === 1 ? { ...prev, bc: prev.bc + 1 } : { ...prev, bc: prev.bc + 0 }
            )


        }
        else if(type==='iot'){
            setResult((prev) =>
                selectedAnswer === 0
                    ? {
                        ...prev,
                        iot: prev.iot + 2,

                    }
                    : selectedAnswer === 1 ? { ...prev, iot: prev.iot + 1 } : { ...prev, iot: prev.iot + 0 }
            )


        }
        else if(type==='ml'){
            setResult((prev) =>
                selectedAnswer === 0
                    ? {
                        ...prev,
                        ml: prev.ml + 2,

                    }
                    : selectedAnswer === 1 ? { ...prev, ml: prev.ml + 1 } : { ...prev, ml: prev.ml + 0 }
            )


        }
        else{
            setResult((prev) =>
                selectedAnswer === 0
                    ? {
                        ...prev,
                        cc: prev.cc + 2,

                    }
                    : selectedAnswer === 1 ? { ...prev, cc: prev.cc + 1 } : { ...prev, cc: prev.cc + 0 }
            )



        }

        if (activeQuestion !== 8) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            Navigate('/result')
            console.log(result)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === "YES") {
            setSelectedAnswer(0)
        }
        else if (answer === "NO") {
            setSelectedAnswer(2)
        }
        else {
            setSelectedAnswer(1)
        }
    }

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    return (

        <div className='main-container'>
            {/* <h1>Aptitude Test</h1> */}
            <div className="quiz-container">
                
                    <div>
                        <div>
                            <span className="active-question-no">
                                {addLeadingZero(activeQuestion + 1)}
                            </span>
                        </div>
                        <h2>{question}</h2>
                        <ul>
                          
                            {choices.map((answer, index) => (
                                <li
                                    onClick={() => onAnswerSelected(answer, index)}
                                    key={answer}
                                    className={
                                        selectedAnswerIndex === index ? 'selected-answer' : null
                                    }>
                                    {answer}
                                </li>
                            ))}
                        </ul>
                        <div className="flex-right">
                            <button
                                onClick={activeQuestion === 8 ?  handleLast: onClickNext}
                                disabled={selectedAnswerIndex === null}>
                                {activeQuestion === 8 ? 'Finish' : 'Next'}
                            </button>
                        </div>
                    </div>
              
            </div>
        </div>
    )
}

export default Aptitude2
