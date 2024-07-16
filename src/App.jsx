import { useState } from 'react'

import './App.css'
import { FaCartPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import { FaMobileScreenButton } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)

  return (
          <div className='start_selling_parent_container'>

             <div className='Navbar_container'>
            
                <div  className='Navbar_leftcontainer'>
                        
                      <div>
                          <FaCartPlus className='icon' />
                          <div>
                            <pre> 
                            <b>Ecwid </b>
                            <span><b> by lightspeed</b></span>
                            </pre>
                            
                          </div>

                        </div>
                        <div>
                          <a><b> Sell</b></a>
                          <a> <b>market </b> </a>
                          <a> <b> manager </b> </a>

                        </div>
                    
                  </div>  




                  <div className='navbar_right_container'>
                    <a><b> learn </b></a>
                    <a><b> Partners</b></a>
                    <a><b>Pricing</b></a>
                    <a> <b>Login</b></a>
                    <a> <b>get started FREE </b></a>

                  </div>







            </div>

              <div className='start_Selling_container'>
                      <h1> Start selling online for free</h1>
                      <div>  
                      <p> we're putting free trials on trial. with Ecwid. yyouu get free forever. Set up </p>
                              <p>free account once. and keep it as you like. Seriously </p>
                        
                        </div>
                    
                        
                        <button>  Get started for free  <FaArrowRight />  </button>
                        <p> No credit card required</p>


              </div>

              <div  className='icons__container'>

              <div> <div className='first__icon'>   <FaLocationArrow /> <b> capterra</b> </div> best ease of use</div>
              <div> <div > <FaStar />  <b>  Trustpilot  </b></div> 4.7 average rating</div>
              <div> <div > <FaGoogle /><b>  |CROWD </b> </div>   Easiest Setup Summer </div>
              <div> <div><FaGoogle /> <b> |CROWD </b> </div> Best Usability Summer 2021  </div>

              


              </div>
                
              <div className='sell_anyware_facebook__and__instagram_conatiner'> 
                      
                      <div>  
                            <div className='sell_anyware_container'>
                              <h1> Sell anyware</h1>
                              <div>     
                              <p>Set up Your Ecwid store once to easily sync and sell across a website,</p>
                              <p> social media. marketplacess like amazon. and live in-person. Get started,</p>
                              <center> with one.or try them all.</center>
                              </div>
                              <button>  Learn more  <FaArrowRight/></button> 



                            </div>

                            <div className='facebook__and__instagram_conatiner'>

                              <div>
                                <h1>Facebook</h1>
                                <p> set up and manage a facebook Store, right from your Ecwid dashboard.
                                  you're ready for social selling.
                                </p>
                              </div>
                                
                                <div>
                              <h1>Instagram</h1>

                              <p> Let customers order directly from your instagram posts when you're powered by Ecwid.</p>


                              </div>

                            </div>
                      </div>  
                      <div className='image'>  
                      <img className='image' src="https://res.cloudinary.com/djexsyuur/image/upload/v1704395500/Rectangle_7_2_hu4rfb.png"/>

                        
                    </div> 




                </div>      
              
              

                <div className='michal_jakson_text_container'>

                    <p>This is the perfect place to get your online business up and running. You
                    literally don't have to anyware else.They have everythingg you need
                    plus add on widgets web syncing to social media and more  
                    

                </p> 

                <div className='stars_container'>
                  
                  <div>  <img  className = "jack_image" src="https://res.cloudinary.com/djexsyuur/image/upload/v1704387090/pexels-artem-beliaikin-1832323-removebg-preview_xrxwwv.png"/> <p> Michelle jackson</p></div>
                  <div>

                    <span>< FaStar/>  <b>TrustPilot</b></span> <span> < FaStar/>< FaStar/>< FaStar/>< FaStar/>< FaStar/></span>

                  </div>

                </div>  



                </div>

                <div className='sell_anyware_facebook__and__instagram_conatiner'> 
                      

                    <div className='image'>  
                      <img className='image' src="https://res.cloudinary.com/djexsyuur/image/upload/v1704395500/Rectangle_7_2_hu4rfb.png"/>

                        
                        </div> 


                      <div>  
                            <div className='sell_anyware_container'>
                              <h1> Sell anyware</h1>
                              <div>     
                              <p>Set up Your Ecwid store once to easily sync and sell across a website,</p>
                              <p> social media. marketplacess like amazon. and live in-person. Get started,</p>
                              <center> with one.or try them all.</center>
                              </div>
                              <button>  Learn more  <FaArrowRight/></button> 



                            </div>

                            <div className='facebook__and__instagram_conatiner'>

                              <div>
                                <h1>Facebook</h1>
                                <p> set up and manage a facebook Store, right from your Ecwid dashboard.
                                  you're ready for social selling.
                                </p>
                              </div>
                                
                                <div>
                              <h1>Instagram</h1>

                              <p> Let customers order directly from your instagram posts when you're powered by Ecwid.</p>


                              </div>

                            </div>
                      </div>  

                  




                </div>  


            {/* <div className='sell_anyware_facebook__and__instagram_conatiner'> 
                  

                  <div>  
                   <img className='image' src="https://res.cloudinary.com/djexsyuur/image/upload/v1704395500/Rectangle_7_2_hu4rfb.png"/>
 
                     
                       </div> 
                   <div>  
                         <div className='sell_anyware_container'>
                           <h1> Manage simply</h1>
                           <div>     
                           <p>control everything seamlessly from a single dashboard with centralized,</p>
                           <p> inventory, order management, pricing and more. Like a leisurely walk in</p>
                           <p>the park.. if that part was also made of money</p>
                           </div>
                           <button>  Learn more  <FaArrowRight/></button> 
 
 
 
                         </div>
 
                         <div className='facebook__and__instagram_conatiner'>
 
                           <div>
                             <h1>Facebook</h1>
                             <p> set up and manage a facebook Store, right from your Ecwid dashboard.
                               you're ready for social selling.
                             </p>
                           </div>
                             
                             <div>
                           <h1>Instagram</h1>
 
                           <p> Let customers order directly from your instagram posts when you're powered by Ecwid.</p>
 
 
                           </div>
 
                         </div>
                   </div>  
 
                
 
 
 
 
             </div>   */}

             <div className='sell_anyware_facebook__and__instagram_conatiner'> 
                  
                  <div>  
                        <div className='sell_anyware_container'>
                          <h1> Manage simply </h1>
                          <div>     
                          <p>control everything seamlessly from a single dashboard with centralized,</p>
                           <p> inventory, order management, pricing and more. Like a leisurely walk in</p>
                           <p>the park.. if that part was also made of money</p>
                          </div>
                          <button>  Learn more  <FaArrowRight/></button> 



                        </div>

                        <div className='facebook__and__instagram_conatiner'>

                          <div>
                            <h1>Fast and secure payments</h1>
                            <p> Choose from Stripe more than
                              50 other payment options to accept
                              credit card payment quickly and
                              securely </p>
                          </div>
                            
                            <div>
                          <h1>shipping that works for u</h1>

                          <p> choose as many shipping rates and carries as u like to provide and your customers with the best experience</p>


                          </div>

                        </div>
                  </div>  
                  <div className='image'>  
                  <img className='image' src="https://res.cloudinary.com/djexsyuur/image/upload/v1704395500/Rectangle_7_2_hu4rfb.png"/>

                    
                </div> 




            </div>      
           
               <div className='sell_around_the_container'>

                        <div>
                              <h1> sell around the world</h1>
                              <p> Take your samll businnes global  with built in-international 
                                payment  tools and tnaslation support for 50 languages-
                                and counting 
                              </p>
                        </div>
                             

                        <div>

                              <div className='lastcontainer_of_sell_around'> <h1>50  <sup>+</sup></h1>  <p>payment gateways</p> </div>
                               <div className='lastcontainer_of_sell_around'> <h1>175 </h1>    <p> countries</p></div>
                               <div className='lastcontainer_of_sell_around'>   <h1> 50</h1>  <p> languages</p> </div>
                               
                               

                          </div>
 

               </div>
               
             <div className='cards_container'>


              <div> 
                 <div> <FaHeadphones className='icon_height'/> </div>    
                 <div>
                  <h1>Live support</h1>
                  <p> export support support</p>
                  
                 </div>     
                 <button> Learn more  <FaArrowRight/> </button>
                 

               </div>
            
               <div> 
                 <div><RiAppsFill className='icon_height'/></div>    
                 <div>
                  <h1>Ecwid App Market</h1>
                  <p> Take your store to the next level with
                    new tools and apps from our Ecwid partners
                  </p>
                  
                 </div>     
                 <button> Learn more  <FaArrowRight/> </button>
                 

               </div>
              
               <div> 
                 <div> <FaMobileScreenButton  className='icon_height'/> </div>    
                 <div>
                  <h1>Live support</h1>
                  <p> export support support</p>
                  
                 </div>     
                 <button> Learn more  <FaArrowRight/> </button>
                 

               </div>
            







             </div>





            
          </div>
  )
}

export default App
