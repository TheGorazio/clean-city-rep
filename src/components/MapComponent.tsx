import React from 'react';
import { BingMap, BingPushpin } from 'react-rx-bing-map';

class MyMapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [
                {
                    location: {
                        latitude: 25.0112183,
                        longitude: 121.52067570000001
                    },
                    draggable: false,
                    locationServiceCB: (location) => "<b><u>Location</u></b>: {2}<br>Coordinates {0},{1}".format(location.point.coordinates[0], location.point.coordinates[1], location.name),
                    icon: 'beacon.png',
                    width: 25, height: 39,
                    key: Date.now()
                }
            ]
        }
    }
    render() {
        let defaultView = [
            {
                center: {
                    latitude: this.state.markers[0].location.latitude,
                    longitude: this.state.markers[0].location.longitude
                },
                zoom: 15,
                animate: true
            }
        ]
        return (
            <BingMap MapReferecnceId="mapDiv"
                     BingTheme={true}
                     CenterMap={true}
                     enableHighDpi={false}
                     initialMapView={defaultView}
                     ShowTraffic={false}
                     credentials={AsVAl3GKVxMnfeTLKPB-BU59MT_Oz2KolUvGQQq8rV90ynf90KxEpxtoo8XvKtuV}>
                     {
                         this.state.markers.map((marker, index) => {
                             return (
                                 <BingPushpin {...marker} />
                             );
                         })
                     }
            </BingMap>
        );
    }
}

export default MyMapComponent;