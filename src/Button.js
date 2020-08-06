import React from 'react'

const Button = ({texto, setDados, setCarregando}) =>{
    
    const end=`https://ranekapi.origamid.dev/json/api/produto/${texto}`
    
    const handleClick = async() =>{
        try {
            setCarregando(true)
            const resp = await fetch(end)
            const data = await resp.json()
            setDados(data)
            setCarregando(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <button onClick={handleClick} style={{margin:'0.5rem'}}>{texto}</button>
    )
}

export default Button

