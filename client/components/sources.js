import React from "react"
import {Link} from "react-router-dom"

const cites = [
  "USGS NWHC - Laboratory Information Management System - Eastern US - Avian Cholera and Pasteurella multocida(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Marsh Monitoring Program - Birds(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "EOD - eBird Observation Dataset(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Ontario Breeding Bird Atlas 2001-2005(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "U.S.D.A. Forest Service, Redwood Sciences Laboratory - Lamna Point Count(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Borror Lab of Bioacoustics (BLB), Ohio State University(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS PWRC - Bird Banding Lab - Encounters(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Point Reyes Bird Observatory - Point Counts(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS PWRC - North American Breeding Bird Atlas Explorer(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Ontario Breeding Bird Atlas 1981-1985(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "naturgucker(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "NPS - Inventory and Monitoring Program - NPSpecies Park Species Lists(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS NWHC - Laboratory Information Management System - US - Avian Pox and Pox Viruses(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Macaulay Library Audio and Video Collection(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS PWRC - North American Breeding Bird Survey - 1966-2013(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "iNaturalist Research-grade Observations(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "Great Backyard Bird Count(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS PWRC - Bird Banding Lab - US 10min Block(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "USGS Patuxent Wildlife Research Center Seabirds Compendium(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",

  "Anymals+plants - Citizen Science Data(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06",
  "BoBO - Botanic Garden and Botanical Museum Berlin-Dahlem Observations(Accessed through Biodiversity Information Serving Our Nation (BISON), https://bison.usgs.gov, 2019-03-06"
]

export const Sources = () => {
  return (
    <div>
      <h1>Data provided by:</h1>
      <h2>
        <a href="https://bison.usgs.gov/#home">
          Biodiversity Information Serving Our Nation (BISON)
        </a>
      </h2>
      <ul>
        {cites.map((cite, idx) => {
          return <li key={idx}>{cite}</li>
        })}
      </ul>
    </div>
  )
}

export default Sources
