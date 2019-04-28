import React from 'react'
import User from '../User';
import ButtonChange from '../Button_change'


function Main() {
    return (
        <div className='main'>
            <User firstName= "Davide"  lastName="Naccarati" />
            <ButtonChange className='btn' />
        </div>
    )
}


export default Main