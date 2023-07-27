import React from 'react'
import {
    Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel,
    AccordionItemHeading
} from 'react-accessible-accordion'
import "./styles.css"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export default function Forecast({ data }) {
    const daynow = new Date().getDay();
    const ForecastDays = days.slice(daynow, days.length).concat(days.slice(0, daynow));

    return (
        <>
            <label className='title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((currElm, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='daily'>
                                    <img src={`icons/${currElm.weather[0].icon}.png`} alt='weather' className='small-icon'></img>
                                    <label className='day'>{ForecastDays[index]}</label>
                                    <label className="description">{currElm.weather[0].description}</label>
                                    <label className="min-max">{Math.round(currElm.main.temp_max)}°C /{Math.round(currElm.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='details'>
                                <div className='details-item'>
                                    <span>Pressure : {currElm.main.pressure}</span>
                                    <span>Humidity : {currElm.main.humitdity}</span>   
                                    <span>Clouds : {currElm.clouds.all}</span>  
                                    <span>Wind Speed : {currElm.wind.speed} m/s</span>                                                            
                                    <span>Sea Level : {currElm.main.sea_level} m</span>   
                                    <span>Feels Like : {Math.round(currElm.main.feels_like)}°C</span>   
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}
