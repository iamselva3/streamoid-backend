const mongoose = require('mongoose');

const MappingSchema = new mongoose.Schema({
  marketplaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Marketplace', required: true },
  marketplaceName: String,
  sellerFilename: String,
  sellerColumns: [String],
  mapping: mongoose.Schema.Types.Mixed, // { targetAttr: sourceColumn }
  sampleRows: [mongoose.Schema.Types.Mixed],
  createdBy: String, // optional: user id or email
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mapping', MappingSchema);
