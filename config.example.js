/**
 * AHSAN REAL ESTATE & BROTHERS TRANSPORT
 * Configuration Template
 *
 * Copy this file to config.js and insert your actual keys.
 */

const APP_CONFIG = {
    // MongoDB Database Connection URI
    MONGODB_URI: "YOUR_MONGODB_CONNECTION_STRING",
    
    // Google Gemini AI API Key
    GEMINI_API_KEY: "YOUR_GEMINI_API_KEY",
    
    // Feature Toggles
    ENABLE_MONGODB_SYNC: false,
    ENABLE_GEMINI_AI: false
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
