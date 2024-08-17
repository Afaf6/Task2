import './ImageComponent.css';
import Profile from '../../../public/Images/Profile.jpeg';
function ImagesComponent(){
    return (
        <div id="Imgdiv">
            <img id="Profimg" src={Profile} />
            <h1 id="Profname"> Jessica Randall</h1>
            <h4 id="adress">London, United Kingdom</h4>
            <p id="infojob">"Front-end developer and avid reader"</p>
        </div>
    );
}
export default ImagesComponent;