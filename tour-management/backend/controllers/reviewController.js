import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    const tourId = req.params.tourId;
    const newReview = new Review({ ...req.body }); // Assuming req.body contains the necessary review data

    try {
        // Save the new review to the database
        const savedReview = await newReview.save();

        // Update the reviews array of the tour with the ID of the newly created review
        await Tour.findByIdAndUpdate(tourId, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({
            success: true,
            message: 'Review submitted successfully',
            data: savedReview // Include the saved review data in the response
        });
    } catch (err) {
        // If an error occurs during the process, handle it and send an appropriate response
        res.status(500).json({ success: false, message: 'Failed to submit review', error: err.message });
    }
};
