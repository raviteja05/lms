export const addOptions=(options)=>{
    return {type:'OPTIONS',payload:options}
}
export const questionIndex=(index)=>{
    return {type:'INDEX',payload:index}
}

export const getResult=(result)=>{
    return {type:'RESULT',payload:result}
}

export const fetchTest=(test)=>{
    return {type:'TEST',payload:test}
}
export const fetchCurrentQuestion=(question)=>{
    return {type:'CURRENT_QUESTION',payload:question}
}