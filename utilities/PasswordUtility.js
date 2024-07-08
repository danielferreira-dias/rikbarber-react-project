// passwordUtils.js
import bcrypt from 'bcrypt';

// Function to hash a password
const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};


// Export as object
export default { hashPassword };