import "./BodySection.css"
import Logo from "../images/copper.png"

const BodySection = () =>{
    return(
        <div className="body-section">
            <img src={Logo} alt="Copper Logo" width="380px" height="380px"/>
            <h1>We’ll be live soon👋!</h1>
            <p>Sorry 🙏 for the inconvenience!</p>
            <p>We’re working on building a cool 😎 website at the moment.<br/> 
                If you are looking for Copper's documentation 📄,<br/>
                <a href="Docs/docs.html">click here to be redirected to the correct page.</a></p>
            <p>If you need any extra info, you can find us on <a href="https://discord.gg/wBphfhBavS">Discord.</a></p>
            <p>- Abu#6168, ₥AR₭?#8002</p>
        </div>
    )
}
export default BodySection;