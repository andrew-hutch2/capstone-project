
import sandwich from "../images/sandwiches4.jpg";
function CallToAction() {
  return (
    <div className="grid-adjustable-columns calltoaction">
        <section className="calltoaction-text">
            <h1 className="littlelemonyellow"> Little Lemon</h1>
            <h2> Chicago</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <a href="/booking"><button aria-label="reserve a table" className="calltoaction-button"> Reserve a table</button></a>
        </section>
        <section>
            <img alt="sandwiches" width="400" src={sandwich} className='calltoaction-img'/>
        </section>
    </div>
  )
}

export default CallToAction