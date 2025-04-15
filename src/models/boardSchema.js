import mongoose from 'mongoose';
const { Schema } = mongoose;

const boardSchema = new Schema({
    title: String,
    description: String,
    type: String,
    ownerIds: [],
    MembersIds: [],
    _destroy: { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('board', boardSchema);