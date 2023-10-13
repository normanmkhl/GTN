const asyncHandler = require('express-async-handler');
const Exporter = require('../repositories/exporterRepository.js');

const getExporterFOB = asyncHandler(async (req, res) => {
  const exporterFOB = await Exporter.filterFOBByYear(req.params.filter);
  if (exporterFOB.error){
    return res.status(500).json({
          message: exporterFOB.message
      })
  }
  return res.status(200).json(exporterFOB)
})

module.exports = {
  getExporterFOB
}