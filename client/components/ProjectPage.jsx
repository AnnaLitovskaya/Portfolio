import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#ee6c4d',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProjectPage() {
  const [openFundit, setOpenFundit] = React.useState(false);
  const handleOpenFundit = () => setOpenFundit(true);
  const [openNoCap, setOpenNoCap] = React.useState(false);
  const handleOpenNoCap = () => setOpenNoCap(true);
  const handleClose = () => {
    setOpenFundit(false);
    setOpenNoCap(false);
  };

  return (
    <section className="app-screen" id="project-page-container">
      <div className="project-container">
        <div className="project-box">
          <div
            role="button"
            tabIndex={0}
            onClick={handleOpenFundit}
            onKeyDown={handleOpenFundit}
          >
            <header className="project-title">
              <span>FUNDIT</span>
              <span>Finance Management Application</span>
            </header>
            <img
              className="project-images"
              alt="FundIt"
              src="public/photos/FundIt.png"
            />
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openFundit}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openFundit}>
              <Box sx={style} className="project-modal">
                <Typography className="bold-text" variant="h5" component="h2">
                  FUNDIT
                </Typography>
                <img
                  className="project-images modal-image"
                  alt="FundIt"
                  src="public/photos/FundIt.png"
                />
                <span id="project-description">
                  FUNDIT is a family web-app for tracking chores and allowances.
                  The app aims to create a child user experience of financial
                  autonomy. Kids can earn money and fund items for themselves to
                  help develop responsible money habits.
                </span>
                <span id="minimize">
                  FUNDIT issues a unique virtual credit card to each child user
                  through Stripe. Parents have the ability to pay off balances
                  through ACH charges by linking their bank account with Plaid.
                </span>
                <span>
                  <span className="bold-text">Technologies used: </span>
                  Node, Express, React, Redux, Postgresql, Sequelize, Stripe,
                  Plaid, Passport, Puppeteer, Firebase, Chart.js
                </span>
                <div className="demo-links">
                  <a href=" https://fundit-web.herokuapp.com/#/">
                    <button type="button">DEMO</button>
                  </a>
                  <a href="https://github.com/AnnaLitovskaya/FUNDIT">
                    <button type="button">CODE</button>
                  </a>
                  <a href="https://www.youtube.com/watch?v=0Be85vgUVfs&ab_channel=FullstackAcademy">
                    <button type="button">VIDEO</button>
                  </a>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
        <div className="project-box">
          <div
            role="button"
            tabIndex={0}
            onClick={handleOpenNoCap}
            onKeyDown={handleOpenNoCap}
          >
            <header className="project-title">
              <span>NO CAP</span>
              <span>E-Commerce Website</span>
            </header>
            <img
              className="project-images"
              alt="No-Cap"
              src="public/photos/No-Cap.png"
            />
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openNoCap}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openNoCap}>
              <Box sx={style} className="project-modal">
                <Typography className="bold-text" variant="h5" component="h2">
                  NO CAP
                </Typography>
                <img
                  className="project-images modal-image"
                  alt="No-Cap"
                  src="public/photos/No-Cap.png"
                />
                <span>
                  NoCap is a simple e-commerce hat shop build by 5 developers in
                  two weeks.
                </span>
                <span>
                  <span className="bold-text">Technologies used: </span>
                  Node, Express, React, Redux, Postgresql, Sequelize
                </span>
                <div className="demo-links">
                  <a href="https://nocap-demo.herokuapp.com/">
                    <button type="button">DEMO</button>
                  </a>
                  <a href="https://github.com/AnnaLitovskaya/No-Cap">
                    <button type="button">CODE</button>
                  </a>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
