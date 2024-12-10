
import User from '../models/User.js'

//create new user
export const createUser = async (req, res) => {

    const newUser = new User(req.body)

    try {

        const savedUser = await newUser.save();

        res
            .status(200)
            .json
            ({
                success: true,
                message: 'Successfully created',
                data: savedUser
            })

    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to create. Try again'
            })

    }
}

// update user
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updatedUser, // Corrected from savedUser to updatedUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to Update",
        });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {

        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully Deleted",

        });



    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to delete",
        });

    }
};

// getSingle user
export const getSingleUser = async (req, res) => {

    const id = req.params.id;
    try {

        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            message: "Successfully get Single user",
        });

    } catch (err) {

        res.status(404).json({
            success: false,
            message: "Not Found",
        });

    }
};

// getAll user
export const getAllUser = async (req, res) => {

    //for pagination  
    const page = parseInt(req.query.page);
    console.log(page)

    try {
        const users = await User.find({})
        // .skip(page * 8)
        // .limit(8);
        res.status(200).json
            ({
                success: true,
                // count: users.length,
                message: "Successfully All User",
                data: users,
            });


    } catch (err) {

        res.status(404).json({
            success: false,
            message: "not found",
        });

    }
};
