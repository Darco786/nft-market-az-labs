import React from 'react'
import AiImg1 from '../../assets/genai/ai1.png'

function AiGenBox() {
  return (
    <>
    
    <section className='ai-box'>
        <div className='container'>
            <div className='gen-head'>
                <h2>Generate type</h2>
            </div>
            <div className='ai-main-box-grid'>
                <div className='ai-img-box'>
                    <img src={AiImg1} alt=""/>
                    <a href="/" className='ai-btn'>anime</a>

                </div>

           


                <div className='ai-img-box'>
                <img src={AiImg1} alt=""/>
                    <a href="/" className='ai-btn'>anime</a>

                </div>


                <div className='ai-img-box'>
                <img src={AiImg1} alt=""/>
                    <a href="/" className='ai-btn'>anime</a>

                </div>

                <div className='ai-img-box'>
                <img src={AiImg1} alt=""/>
                    <a href="/" className='ai-btn'>anime</a>

                </div>

                <div className='ai-img-box'>
                <img src={AiImg1} alt=""/>
                    <a href="/" className='ai-btn'>anime</a>

                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default AiGenBox