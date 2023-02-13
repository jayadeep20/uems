
export default () => {return (<div className="container">
<div className="row">
  <div className="col-lg-6 col-md-6">
    <div className="container first">
      <h2>Upcoming Events</h2>
      <br />
      <h4>
        <span
          ><i className="bi bi-caret-right-square-fill"></i>17-09-2022</span>
        <span
          ><marquee behavior="scroll" direction="right"
            >One-Week FDP on Academic Writing Venue: FS10
            <a href="#">click here</a>
          </marquee>
        </span>
      </h4>
      <h4>
        <span
          ><i className="bi bi-caret-right-square-fill"></i>01-12-2022</span>
        <span><marquee behavior="scroll" direction="right">Orientation day Venue: Auditorium</marquee>
        </span>
        <a href="#">click here</a>
      </h4>
      <h4>
        <span><i className="bi bi-caret-right-square-fill"></i></span>
        <span><marquee behavior="scroll" direction="right"></marquee>
        </span>
        <a href="#">click here</a>
      </h4>
    </div>
  </div>
  <div className="col-lg-6 col-md-6">
    <h2 style={{"text-align" : "center"}}>Event Calendar</h2>
    <br />
    
  </div>
</div>
</div>);}