import mongoose from 'mongoose';
const { Schema } = mongoose;

const boardSchema = new Schema({
    title: String,
    description: String,
    type: String,
    ownerIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    MembersIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    _destroy: { type: Boolean, default: false }
}, {
    timestamps: true
});

export default mongoose.model('boardModels', boardSchema);