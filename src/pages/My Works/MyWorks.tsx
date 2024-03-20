import { useState, useEffect } from 'react';
import './MyWorks.css';

const Works = [
  {
    image: 'images/Work1.jpg',
    paragraph: 'Description 1',
  },
  {
    image: 'images/Work2.jpg',
    paragraph: 'Description 2',
  },
  {
    image: 'images/Work3.jpg',
    paragraph: 'Description 3',
  },
  {
    image: 'images/Work4.jpg',
    paragraph: 'Description 4',
  },
  {
    image: 'images/Work5.jpg',
    paragraph: 'Description 5',
  },
  {
    image: 'images/Work6.jpg',
    paragraph: 'Description 6',
  },
  {
    image: 'images/Work7.jpg',
    paragraph: 'Description 7',
  },
  {
    image: 'images/Work8.jpg',
    paragraph: 'Description 8',
  },
];

function MyWorks() {
  const [currentIndex, setCurrentIndex] = useState(2);

    useEffect(() => { setCurrentIndex(0); }, []);

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Works.length
    );
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + Works.length) % Works.length
    );
  };

  return (
    <section className='work-section' id='MyWorks'>
        <h2 className='Section-Heading'>My Works</h2>
        <div className="Work-Lap-View">
          <div className="My-Works">
              <div className="carousel">
                  {Array(5).fill(0).map((_, index) => {
                      const arrayIndex = (currentIndex + index) % Works.length;
                      return (
                          <div key={index} className="Work">
                              <div
                                  className={`image ${"work"+index}`}
                                  style={{
                                      backgroundImage: `url(${Works[arrayIndex].image})`,
                                  }}
                              />
                              {index === 2 && (
                                  <p className="description">
                                      {Works[arrayIndex].paragraph}
                                  </p>
                              )}
                          </div>
                      );
                  })}
              </div>
          </div>
          <div className="arrows">
              <button className="arrow left" onClick={handleLeftArrowClick}>
                  &#8678;
              </button>
              <button className="arrow right" onClick={handleRightArrowClick}>
                  &#8680;
              </button>
          </div>
        </div>
        <div className="Work-Mobile-View">
          <div className="slider-container">
              <div className="slider">
                <img src="images/Work1.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work2.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work3.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work4.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work5.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work6.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work7.jpg" alt="" />
              </div>
              <div className="slider">
                <img src="images/Work8.jpg" alt="" />
              </div>
          </div>
        </div>
    </section>
  );
}

export default MyWorks;
