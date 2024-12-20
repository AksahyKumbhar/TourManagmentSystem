import React, {useState, useContext} from 'react';
import './booking.css';
import { Form, ListGroup, ListGroupItem, Button, FormGroup } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {BASE_URL} from "../../utils/config"

const Booking = ({ tour, avgRating }) => {

    const { price, reviews, title } = tour;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    // const [credentials, setCredentials] = useState({ 
    const [booking, setBooking] = useState({ 
        userId: user && user._id, //later it will be dynamic 
        userEmail: user && user.email,
        fullName: title,
        guestSize:1,
        bookAt:''

    })
    const handleChange = (e) => {
        setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

      // send data to the server

      const handleClick = async e =>{
        e.preventDefault();
          console.log(booking);
     
        try {
            if (!user || user === undefined || user === null) {
                return alert('Please sign in');
            }
        
            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking) 
            })
        
            const result = await res.json()

            if(!res.ok){
                return alert(result.message)
            }
            navigate('/thank-you');

        } catch (err) {
            // Handle errors if needed
            alert(err.message);
        }
        
         
       

      };


      
      
    

    return (
        <div className='booking'>
        <div className='booking__top d-flex align-items-center justify-content-between'>
            <h3>${price} <span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center gap-1'>
                <i className='ri-star-s-fill'> </i>

                {avgRating === 0 ? null : avgRating} ({reviews ?.length})

            </span>

            </div>
             

        {/* ==================== Booking form ================== */}

             <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' 
                        required onChange={handleChange} / >
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' 
                        required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id="bookAt" 
                        required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id="guestSize" 
                        required onChange={handleChange}/>
                    </FormGroup>


                </Form>
             </div>
         



        {/* ================= Booking End ======================== */}

               

         {/* ================ booking bottom ======================  */}

         <div className='booking__bottom'>
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i className='ri-close-line'></i> 1 person </h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Services Charge</h5>
                    <span>${serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                        <h5 className='fw-bold'>Total</h5>
                        <span className='fw-bold'>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button className=' bg-warning btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
         </div>
                       

                
                  




                  



        </div>


    );
}

export default Booking;