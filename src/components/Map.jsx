import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Map() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    let lat = searchParams.get("lat");
    let lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer} onClick={() => {navigate("form")}}>
            <h1>Position: {lat}, {lng}</h1>
        </div>
    )
}

export default Map