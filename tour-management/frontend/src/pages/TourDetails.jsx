import React, { useEffect, useRef, useState, useContext } from "react";
import '../style/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from "react-router-dom";
import tourData from '../assets/data/tours'
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg"
import Booking from "../components/Booking/Booking"
import Newsletter from "../shared/Newsletter";
// import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {

    const { id } = useParams()

    const reviewMsgRef = useRef('')

    const [tourRating, setTourRating] = useState(null)
    const { user } = useContext(AuthContext)

    //this is an static data later we will call our and API and load our data database 
     const tour = tourData.find(tour => tour.id === id)
    //  const {tour,loading,error} = tourData.find(tour => tour.id === id)


    //fetch data from database
    //   const {data:tour,loading,error}=useFetch (`${BASE_URL}/tours/${id}`);
    //   const {data:tour,loading,error} = useFetch{tourData.find(tour => tour.id === id), (`${BASE_URL}/tours/${id}`);}
    // const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`, tourData.find(tour => tour.id === id));


    // const { data:  fetchedTour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
    // const staticTour = tourData.find(tour => tour.id === id);
    // const  tour = fetchedTour || staticTour;


    //destruction properties from  tour object 

    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

    const options = { day: "numeric", month: "long", year: "numeric" }


    const { totalRating, avgRating } = calculateAvgRating(reviews)

    const submitHandler = async e => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        // alert(`${reviewText}, ${tourRating}`);

        //later will call our api


        try {
            if (!user || user === undefined || null) {
                alert('Please sign in')
            }


            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: tourRating,
            }

            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj)
            })

            const result = await res.json()
            if (!res.ok)
            {
                return alert(result.message);
            //    alert("review submitted")
            }
        } catch (err) {
            alert(err.message);

        }

    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [tour])

    return (
        <>
            <section>
                <Container>
                    {/* {
                        loading && <h4 className="text-center">Loading...........</h4>
                    }
                    {
                        error && <h4 className="text-center pt-5">{error}</h4>
                    }
                    {!loading && !error && */}
                        <Row>
                            <Col lg="8" >
                                <div className="tour__content" >
                                    <img src={photo} alt="tour_img" />

                                    <div className="tour__info">
                                        <h2>{title}</h2>

                                        <div className="d-flex align-item-center gap-5">

                                            <span className="d-flex align-item-center gap-1">
                                                <i className="ri-star-s-fill" style={{ 'color': 'orange' }}></i>
                                                {calculateAvgRating === 0 ? null : avgRating}
                                                {totalRating === 0 ? (
                                                    "Not rated"
                                                ) : (
                                                    <span>({reviews?.length})</span>
                                                )}
                                            </span>

                                            <span>
                                                <i className="ri-map-pin-user-fill"></i> {address}
                                            </span>
                                            <span>
                                                <i className="ri-group-line"></i>{maxGroupSize} people
                                            </span>


                                        </div>


                                        <div className="tour__extra_details">
                                            <span>
                                                <i className="ri-map-pin-2-line"></i>{city}
                                            </span>
                                            <span >
                                                <i className="ri-money-dollar-circle-line"></i> ${price}/per person
                                            </span>
                                            <span >
                                                <i className="ri-money-dollar-circle-line"></i> {distance} K/m
                                            </span>


                                        </div>

                                        <h5>Description</h5>
                                        <p>{desc}</p>

                                    </div>

                                    {/* ======================tour reviews section ================ */}

                                    <div className="tour__reviews mt-4">
                                        <h4>Reviews ({reviews?.length} reviews)</h4>

                                        <Form onSubmit={submitHandler}>
                                            <div className=" d-flex align-items-center gap-3 mb-4 rating__group">
                                                <span onClick={() => setTourRating(1)}>1<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(2)}>2<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(3)}>3<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(4)}>4<i className="ri-star-s-fill"></i></span>
                                                <span onClick={() => setTourRating(5)}>5<i className="ri-star-s-fill"></i></span>
                                            </div>

                                            <div className="review__input ">
                                                <input type="text" ref={reviewMsgRef} placeholder="share your thoughts" required />
                                                <button className="bg-warning btn primary__btn  text-white " type="submit" style={{ marginLeft: '10px ', borderRadius: '50px' }}>
                                                    Submit
                                                </button>
                                            </div>
                                        </Form>

                                        <ListGroup className="user__reviews">
                                            {
                                                reviews?.map(review => (
                                                    <div className="review__item">
                                                        <img src={avatar} alt="" />

                                                        <div className="w-100">
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <h5>{review.username}</h5>
                                                                    <p>
                                                                        {new Date("01-3-2024").toLocaleDateString(
                                                                            "en-US", options
                                                                        )}
                                                                    </p>
                                                                </div>
                                                                <span className="d-flex align-items-center">
                                                                    {review.rating}<i className="ri-star-s-fill"></i>
                                                                </span>

                                                            </div>

                                                            <h6>{review.reviewText}</h6>
                                                        </div>

                                                    </div>
                                                ))
                                            }
                                        </ListGroup>

                                    </div>

                                    {/* =============== tour reviews section end ================= */}
                                </div>
                            </Col>

                            <Col lg='4'>

                                <Booking tour={tour} avgRating={avgRating} />
                            </Col>
                        </Row>
                    {/* } */}
                </Container>
            </section>
            <Newsletter />
        </>
    )
};

export default TourDetails;