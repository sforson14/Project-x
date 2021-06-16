import React from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";


const MapContainer = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

export default MapContainer
// export default GoogleApiWrapper({
//     apiKey: ("500036472570-14hpfoim6lmb90le4um5gbfig5qeiqms.apps.googleusercontent.com")
// })(MapContainer)