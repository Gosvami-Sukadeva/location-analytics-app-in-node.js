const fsp = require('fs').promises;
const fs = require('fs');

postAnalytics = async(req, res, next) => {
  const {ip, coordinates } = req.body;
  const validator = await schema.validateAsync(req.body);
  let reportAnalytics = [];
  if (fs.existsSync(`${__dirname}/storeAnalytics.json`)){
    //if the file exists, reads the file
    const reportFile = await fsp.readFile(`${__dirname}/storeAnalytics.json`, 'utf-8')
    //converts the file to JavaScript Object
    reportAnalytics = JSON.parse(reportFile)
  } else {
    // if file does not exist
    return('File does not exist');
  }
  reportAnalytics.push({...req.body, createdAt: new Date()});
  await fsp.writeFile(`${__dirname}/storeAnalytics.json`, JSON.stringify(reportAnalytics));
  res.status(201).json({
    status: 'success',
    data: {
      message: 'IP and Coordinates successfully taken'
    }
  })
};






