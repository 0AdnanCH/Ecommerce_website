


const pageNotFound = async (req, res) => {
  try {
    res.render('page-404');
  } catch (error) {
    res.redirect('/pageNotFound');
  } 
}


const loadHomepage = async (req, res) => {
  try {
    return res.render('home');
  } catch (error) {
    console.log('Failed to load home page');
    res.status('500').send('Server Error');
  }
}

module.exports = {
  pageNotFound,
  loadHomepage
}