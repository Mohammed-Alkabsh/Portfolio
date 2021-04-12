import React from "react";

export default function FancyLoader(props) {
  return (
    <div className={`main-modal ${props.isActive ? `active` : ``}`}>
      <div className="preloader">
        <div className="preloader__ring">
          <div className="preloader__sector">L</div>
          <div className="preloader__sector">o</div>
          <div className="preloader__sector">a</div>
          <div className="preloader__sector">d</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">g</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
        </div>
        <div className="preloader__ring">
          <div className="preloader__sector">L</div>
          <div className="preloader__sector">o</div>
          <div className="preloader__sector">a</div>
          <div className="preloader__sector">d</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">g</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
          <div className="preloader__sector"></div>
        </div>
      </div>
    </div>
  );
}
