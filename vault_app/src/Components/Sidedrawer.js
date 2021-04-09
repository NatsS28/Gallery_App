import './Sidedrawer.css'


const SideDrawer = ({ show }) => {
    const SideDrawerClass = ["sidedrawer"];
    if (show) {
        SideDrawerClass.push("show");
    }


    return <div className={SideDrawerClass.join(" ")}>
        <ul className="sidedrawer_links">
            <li>
                <a href="/gallery">My Gallery</a>


            </li>
        </ul>
    </div>





}

export default SideDrawer;