const mongoose = require('mongoose');

async function connect() {
    try {
        // Mongoose >= 6 (và 9) mặc định dùng parser mới, không cần option nào cả
        await mongoose.connect(
            process.env.MONGODB_URI ||
                'mongodb://127.0.0.1:27017/f8_education_dev',
        );
        console.log('Connect DB successfully!');
    } catch (error) {
        // Lệnh này giúp in ra thông báo lỗi gốc thay vì giấu đi
        console.error('Connect DB failed! Error params:', error.message);
    }
}

module.exports = { connect };
