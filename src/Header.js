import React from 'react'
import Button from './Button'

const Header = ({setDados, setCarregando}) => {
    return (
        <div>
            <Button setCarregando={setCarregando} setDados={setDados} texto='tablet' />
            <Button setCarregando={setCarregando} setDados={setDados} texto='notebook' />
            <Button setCarregando={setCarregando} setDados={setDados} texto='smartphone' />
        </div>
    )
}

export default Header