import React from 'react'
import AiImg1 from '../../assets/genai/ai1.png'
import AiImg2 from '../../assets/genai/ai2.png'
import AiImg3 from '../../assets/genai/ai3.png'
import AiImg4 from '../../assets/genai/ai4.png'
import AiImg5 from '../../assets/genai/ai5.png'

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
                    <a href="/" className='ai-btn'>Normal</a>

                </div>

           


                <div className='ai-img-box'>
                <img src={AiImg2} alt=""/>
                    <a href="/" className='ai-btn'>Anime</a>

                </div>


                <div className='ai-img-box'>
                <img src={AiImg3} alt=""/>
                    <a href="/" className='ai-btn'>2D</a>

                </div>

                <div className='ai-img-box'>
                <img src={AiImg4} alt=""/>
                    <a href="/" className='ai-btn'>3D</a>

                </div>

                <div className='ai-img-box'>
                <img src={AiImg5} alt=""/>
                    <a href="/" className='ai-btn'>Realistic</a>

                </div>

            </div>

        </div>

    </section>
    </>
  )
}

export default AiGenBox