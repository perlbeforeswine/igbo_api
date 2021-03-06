import mongoose from 'mongoose';
import { toJSONPlugin } from './plugins';

const { Schema, Types } = mongoose;
const genericWordSchema = new Schema({
  word: { type: String, required: true },
  wordClass: { type: String, default: '' },
  definitions: {
    type: [{ type: String }],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
  variations: { type: [{ type: String }], default: [] },
  details: { type: String, default: '' },
  approvals: { type: [{ type: String }], default: [] },
  denials: { type: [{ type: String }], default: [] },
  updatedOn: { type: Date, default: Date.now() },
  merged: { type: Types.ObjectId, ref: 'Word', default: null },
});

toJSONPlugin(genericWordSchema);

export default mongoose.model('GenericWord', genericWordSchema);
