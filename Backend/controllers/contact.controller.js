import ContactInfo from "../models/contact.model.js";

export const sendInfo = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, message } = req.body;

        const contactInfo = new ContactInfo({
            firstName,
            lastName,
            email,
            phoneNumber,
            message
        });
        await contactInfo.save();
        res.status(201).json({
            message: "Contact Info sent successfully",
            contactInfo: contactInfo
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "Something went wrong while sending contact info!",
        });
    }
}