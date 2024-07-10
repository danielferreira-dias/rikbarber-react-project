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


// Function to compare a password with a hashed password
const comparePasswords = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};


// Export functions individually
export { hashPassword, comparePasswords };