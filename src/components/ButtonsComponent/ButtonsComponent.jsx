import './ButtonsComponent.css';
import Items from "../Items/Items";

function ButtonsComponent(){
    const ArrayOfObjects = [
        {ItemsName : "GitHub"},
        {ItemsName : "Frontend Mentor"},
        {ItemsName : "Linkedin"},
        {ItemsName : "Twitter"},
        {ItemsName : "Instagram"},
    ]
    return (
        <div id="Buttonsdiv">
            {ArrayOfObjects.map((item) => {
                return (
                    <Items ItemsName = {item.ItemsName}></Items>
                );
            }
        )}
        </div>
    );
}
export default ButtonsComponent;






{/* <div>
<Items ItemsName = "GitHub"></Items>
            <Items ItemsName = "Frontend Mentor"></Items>
            <Items ItemsName = "Linkedin"></Items>
            <Items ItemsName = "Twitter"></Items>
            <Items ItemsName = "Instagram"></Items>
</div> */}