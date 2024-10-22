import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
       <section>
            <div class="right-side">
                <div class="text-container">
                    <h3 class="text">Marhbe bik !</h3>
                </div>
                <p>
                    our platform is dedicated for your education
                </p>
            </div>
            <div class="left-side">
                <img src={assets.notes} alt="Girl with notes"/>
            </div>
        </section>
    </div>
  )
}

export default Main
