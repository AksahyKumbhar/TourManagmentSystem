// Home.jsx

import React from 'react';
import '../style/home.css';  // Import the CSS file

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Images-gallery/MasonryImagesGallery';
import Testimonials from "../components/Testimonial/Testimonials"
import Newsletter from '../shared/Newsletter';

const Home = () => {
    return (
        <>
            {/* ===================hero section start ====================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='hero__content'>
                                <div className='hero_subtitle p-2'>
                                    <div className='rounded-border-rectangle bg-warning  ' >
                                        <Subtitle subtitle={'Know Before You Go'} className='fs-6' />
                                    </div>
                                    <img src={worldImg} alt='' className='img-fuild' style={{ height: '40px' }} />
                                </div>
                            </div>
                            <h1>Traveling opens the door to creating {"  "}
                                <span className='text-warning'>  memories</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid facere
                                saepe inventore ex! Obcaecati harum aliquam perferendis eum id neque fuga nam,
                                ullam doloremque!
                            </p>
                        </Col>

                        <Col lg='2'>
                                <div className='hero__img-box'>
                                    <img src={heroImg} alt=''/>
                                </div>
                        </Col>
                        <Col lg='2'>
                            <div className='hero__img-box hero_video-box mt-4'>
                                <video src={heroVideo} alt="" controls/>
                            </div>
                        </Col>
                        <Col lg='2'>
                          <div className='hero__img-box mt-5' >
                            <img src={heroImg02} alt=''/>
                            </div>    
                        </Col> 

                        <SearchBar/>

                    </Row>
                </Container>
            </section>
            {/* ==================hero section start ============================ */}

               <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className='services__subtitle'>what we serve</h5>
                            <h2 className='services__title'>We offer our best services </h2>
                        </Col>
                        <ServiceList/>
                    </Row>
                </Container>
               </section>

               {/* ======================= Feature  tour section start ============================ */}

                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className='mb-5 ' >
                                <div className='bg-warning ' style={{width:'100px',borderRadius:'50px',fontStyle:'italic' }}>
                                {/* <Subtitle subtitle={"Explore"} /> */}
                                <p className='fw-light ' style={{marginLeft:'20px'}}>Explore</p>
                                </div>
                                <h2 className='featured__tour-title'>Our Featured Tours</h2>
                            </Col>
                            <FeaturedTourList/>
                        </Row>
                    </Container>
                </section>

               {/* ======================= Feature  tour section end ============================ */}

               {/* ======================= experience section start ====================== */}

                <section>
                    <Container>
                        <Row>
                        <Col lg='6'>
                            <div className='experience__content' >
                                <div className='bg-warning w-25 ' style={{width:'100px',borderRadius:'50px'}}>
                                {/* <Subtitle subtitle={'Experience'} className='fs-6 fw-light' /> */}
                                <p className='fst-italic p-2 m-2'>Experience</p>
                                </div>
                                <h2>with our experience<br/> we will serve you </h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    <br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                            
                            </div>
                                <div className='counter_wrapper d-flex align-item-center gap-5'>

                                    <div className='counter__box'>
                                        <span>12K+</span>
                                        <h6>Successful Trip</h6>
                                    </div>
                                    <div className='counter__box'>
                                         <span>2K+</span>
                                         <h6>Regular Clients</h6>
                                    </div>
                                    <div className='counter__box'>
                                        <span>15</span>
                                        <h6>Years Experience</h6>
                                    </div>

                                </div>

                        </Col>
                       
                                <Col lg="6">
                                    <div className='experience__img'>
                                        <img src={experienceImg} alt=''/>
                                    </div>
                                </Col>
                        </Row>

                    </Container>
                </section>

               {/* ======================== experience section end ========================= */}

                {/* ======================= gallery section start ========================= */}

                        <section>
                            <Container>
                                <Row>
                                    <Col lg='12'>
                                        <div className='bg-warning ' style={{width:'70px',borderRadius:'50px'}}>
                                        {/* <Subtitle subtitle={'Gallery'}/> */}
                                        <p className='fs-6 fst-italic ' style={{marginLeft:'10px'}}>Gallery</p>
                                        </div>
                                        <h2 className='gallery__title'>Visit our customers tour gallery </h2>
                                    </Col>
                                    <Col lg='12'>
                                        <MasonryImagesGallery/>

                                    </Col>
                                </Row>
                            </Container>
                        </section>



                {/* ======================= gallery section end ========================= */}


                  {/* ===================== testimonial section start ======================  */}
                          

                     <section>
                        <Container>
                            <Row>
                                <Col lg='12' >
                                <div className='bg-warning mt-3' style={{width:'90px',borderRadius:'50px'}}>
                                       {/* <Subtitle subtitle={'Fans Love'}/> */}
                                        <p className='fs-6 fst-italic ' style={{marginLeft:'10px'}}>Fans Love</p>
                                        </div>
                                    
                                    <h2 className='testimonial__title'>What our fans say about us</h2>
                                </Col>
                                <Col lg="12">
                                    <Testimonials/>
                                </Col>
                            </Row>
                        </Container>
                     </section>

                  {/* ===================== testimonial section end ============================ */}

                  <Newsletter/>
        </>
    );
};

export default Home;
