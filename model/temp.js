const mongoose = require('mongoose')

const TempSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'users' }
)

const model = mongoose.model('TempSchema', TempSchema)

module.exports = model
