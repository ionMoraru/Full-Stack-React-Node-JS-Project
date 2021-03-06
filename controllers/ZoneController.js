const Zone = require('../models/Zone');
module.exports = {

  find: (params, callback) => {
    Zone.find(params, (err, zones) => {
      if (err) {
        return callback(err, null);
      }

      return callback(null, zones);
    })
  },

  findById: (id, callback) => {
    Zone.findById(id, (err, zone) => {
      if (err) {
        return callback(err, null);
      }

      return callback(null, zone);
    })
  },

  create: (params, callback) => {
    const zips = params['zipCodes'];
    const zip = zips.split(',');
    const newZips = [];
    zip.forEach((zipCode) => {
      newZips.push(zipCode.trim());
    });

    params['zipCodes'] = newZips;
    Zone.create(params, (err, zone) => {
      console.log(params);
      if (err) {
        return callback(err, null);
      }

      return callback(null, zone);
    })
  },

  update: (id, params, callback) => {
    Zone.findByIdAndUpdate(id, params, {new: true}, (err, zone) => {
      if (err) {
        return callback(err, null);
      }

      return callback(null, zone);
    })

  },

  delete: (id, callback) => {
    Zone.findByIdAndRemove(id, (err) => {
      if (err) {
        return callback(err, null);
      }

      callback(null, null);
    })
  }
}
