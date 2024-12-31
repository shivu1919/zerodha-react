import React from 'react'
import '../css/Main.css'

function Main() {
  return (
    <>
        <div className='first'>
            <img src="https://zerodha.com/static/images/landing.png" width="600"/>

            <h1>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

            <button id="btn">Sign Up for free</button>
        </div>

            <br />
            <br />
            <br />
            <br />
            
        <div className='second'>

            <div id="second_1">
                <h1>Trust with confidence</h1>
                <h3>Customer-first always</h3>
                <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                <br />
             
                <h3>No spam or gimmicks</h3>
                <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <br />
           

                <h3>The Zerodha universe</h3>
                <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br />
              

                <h3>Do better with money</h3>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>

            <div id="second_2">
                <img src="https://zerodha.com/static/images/ecosystem.png" width="700"/>
                <br>
                </br>
                
                <div>   
                <a href="#">Explore Our Product</a>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <a href="#">Try Kite Demo</a>
                </div>

                
            </div>

        </div>

            <br />
            <br />

        <img id="news" src="https://zerodha.com/static/images/press-logos.png"></img>

        <br />

        <h1>Unbeatable Pricing</h1>

        <div className='third'>
            <p>We pioneered the concept of discount broking and price transparency in India.<br /> Flat fees and no hidden charges.</p>

            <div id="third_1">
                <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="." width="120"/>
                <span>Free Account Opening</span>
                
            </div>

            <div>
                <img src="https://zerodha.com/static/images/pricing-eq.svg" width="120" />
                <span>Free equity delivery
                and direct mutual funds</span>
            </div>

            <div>
                <img src="https://zerodha.com/static/images/other-trades.svg" width="120"/>
                <span>Intraday and
                F&O</span>
            </div>
        </div>
    </>
  )
}

export default Main