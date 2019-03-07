const Sequelize = require('sequelize')
const db = require('../db')

const Starling = db.define('starling', {
  bisonid: {
    type: Sequelize.TEXT
  },
  basisofrecord: {
    type: Sequelize.TEXT
  },
  catalognumber: {
    type: Sequelize.TEXT
  },
  collectornumber: {
    type: Sequelize.TEXT
  },
  recordedby: {
    type: Sequelize.TEXT
  },
  providerid: {
    type: Sequelize.TEXT
  },
  institutioncode: {
    type: Sequelize.TEXT
  },
  resourceid: {
    type: Sequelize.TEXT
  },
  ownerinstitutioncollectioncode: {
    type: Sequelize.TEXT
  },
  eventdate: {
    type: Sequelize.TEXT
  },
  year: {
    type: Sequelize.TEXT
  },
  verbatimeventdate: {
    type: Sequelize.TEXT
  },
  providedscientificname: {
    type: Sequelize.TEXT
  },
  scientificname: {
    type: Sequelize.TEXT
  },
  itisscientificname: {
    type: Sequelize.TEXT
  },
  providedcommonname: {
    type: Sequelize.TEXT
  },
  itiscommonname: {
    type: Sequelize.TEXT
  },
  itistsn: {
    type: Sequelize.TEXT
  },
  validaccepteditistsn: {
    type: Sequelize.TEXT
  },
  providedtsn: {
    type: Sequelize.TEXT
  },
  decimallatitude: {
    type: Sequelize.TEXT
  },
  decimallongitude: {
    type: Sequelize.TEXT
  },
  geodeticdatum: {
    type: Sequelize.TEXT
  },
  coordinateprecision: {
    type: Sequelize.TEXT
  },
  coordinateuncertaintyinmeters: {
    type: Sequelize.TEXT
  },
  verbatimelevation: {
    type: Sequelize.TEXT
  },
  verbatimdepth: {
    type: Sequelize.TEXT
  },
  centroid: {
    type: Sequelize.TEXT
  },
  highergeographyid: {
    type: Sequelize.TEXT
  },
  computedcountyfips: {
    type: Sequelize.TEXT
  },
  providedcounty: {
    type: Sequelize.TEXT
  },
  calculatedcounty: {
    type: Sequelize.TEXT
  },
  providedstate: {
    type: Sequelize.TEXT
  },
  calculatedstate: {
    type: Sequelize.TEXT
  },
  mrgid: {
    type: Sequelize.TEXT
  },
  calculated_waterbody: {
    type: Sequelize.TEXT
  },
  establishmentmeans: {
    type: Sequelize.TEXT
  },
  countrycode: {
    type: Sequelize.TEXT
  },
  institutionid: {
    type: Sequelize.TEXT
  },

  collectionid: {
    type: Sequelize.TEXT
  },
  relatedresourceid: {
    type: Sequelize.TEXT
  },
  associatedmedia: {
    type: Sequelize.TEXT
  },
  associatedreferences: {
    type: Sequelize.TEXT
  },
  generalcomments: {
    type: Sequelize.TEXT
  },
  license: {
    type: Sequelize.TEXT
  }
})
module.exports = Starling
