import React,{ useEffect,useState } from 'react';
import './Stats.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


function Stats({ colour1,symbol1,amount1,caption1,
    colour2,symbol2,amount2,caption2,
    colour3,symbol3,amount3,caption3,
    colour4,symbol4,amount4,caption4 }) {

    const ref = React.useRef();
    const onScreen = useOnScreen(ref,"-100px");
    
    function useOnScreen(ref, rootMargin = "0px") {
        const [isIntersecting, setIntersecting] = useState(false);
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setIntersecting(entry.isIntersecting);
            },
            {
              rootMargin,
            }
          );
          if (ref.current) {
            observer.observe(ref.current);
          }
          return () => {
            observer.unobserve(ref.current);
          };
        }, []);
        return isIntersecting;
      }


    function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
    }

    useEffect(() => {
        counter("statsComponent__cloudnumber1",0,amount1,2000);
        counter("statsComponent__cloudnumber2",0,amount2,2000);
        counter("statsComponent__cloudnumber3",0,amount3,2000);
        counter("statsComponent__cloudnumber4",0,amount4,2000);        
    }, [onScreen])

    
    return (
        <div className="container_full">
            <h1 className='stats__heading'>Heading</h1>
            <div className="stats">
                <div className="stats__statComponent">
                     <div className="statComponent">
                        <div className="statcomponent__number" ref={ref}>
                            <CloudDownloadIcon style={{color:colour1}} className="statsComponent__cloud"/>
                            <h1 style={{color:colour1}} id="statsComponent__cloudnumber1">{amount1}</h1>
                            <span style={{color:colour1}}>{symbol1}</span>
                        </div>
                        <p>{caption1}</p>
                    </div>
                </div>
                <div className="stats__statComponent">
                <div className="statComponent">
                        
                        <div className="statcomponent__number" ref={ref}>
                        <CloudDownloadIcon style={{color:colour2}} className="statsComponent__cloud"/>
                            <h1 style={{color:colour2}} id="statsComponent__cloudnumber2">{amount2}</h1>
                            <span style={{color:colour2}}>{symbol2}</span>
                        </div>
                        <p>{caption2}</p>
                    </div>
                </div>
                <div className="stats__statComponent">
                <div className="statComponent">
                        
                        <div className="statcomponent__number" ref={ref}>
                        <CloudDownloadIcon style={{color:colour3}} className="statsComponent__cloud"/>
                        <h1 style={{color:colour3}} id="statsComponent__cloudnumber3">{amount3}</h1>
                        <span style={{color:colour3}}>{symbol3}</span>
                        </div>
                        <p>{caption3}</p>
                    </div>
                </div>
                <div className="stats__statComponent">
                <div className="statComponent">
                        
                        <div className="statcomponent__number" ref={ref}>
                        <CloudDownloadIcon style={{color:colour4}} className="statsComponent__cloud"/>
                        <h1 style={{color:colour4}} id="statsComponent__cloudnumber4">{amount4}</h1>
                        <span style={{color:colour4}}>{symbol4}</span>
                        </div>
                        <p>{caption4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
