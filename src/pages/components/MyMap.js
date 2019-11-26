import React, { Component } from "react";
import MapGL from 'react-map-gl'
import PropTypes from "prop-types";
//import { AuthConsumer } from './AuthContext'

const TOKEN = 'pk.eyJ1IjoianVsaWFydXNzaWFuZmVkZXJhdGlvbi' +
  'IsImEiOiJjazJpbmIxeHUwbTY2M2NtbHpxYW4weGZzIn0.-GVUqir7oT7vVGOU6OokLA'

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

class MyMap extends React.Component {

  static propTypes = {
    showPlease: PropTypes.bool,
    isAuthInSite: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100%',
        height: 500,
        latitude: 0,
        longitude: 0,
        zoom: 2
      },
      mounted: false
    };
    this.handleViewportChange = this.handleViewportChange.bind(this);
  }

  mapRef = React.createRef()

  componentDidMount(viewport) {
    this.setState({ mounted: true })
  }

  updatePredicate(viewport) {
    this.setState({ viewport });
  }

  handleViewportChange = viewport => {
    console.log(this.state.mounted);
    if (this.state.mounted) { this.setState({ viewport }) }
  }

  render() {
    if (this.props.showPlease !== false && this.props.isAuthInSite !== false) {
      const { viewport } = this.state;
      const { mounted } = this.state;


      return (
        <div style={{ margin: '0 auto' }} data-testid="mymap">
          <MapGL
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            onViewportChange={(viewport) => {
              if (mounted) { this.setState({ viewport }) }
            }}

            mapboxApiAccessToken={TOKEN}
          >
          </MapGL>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default MyMap


/*const MyMap = () => {

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 500,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({ ...viewport, transitionDuration: 300 })

  return (

    <div style={{ margin: '0 auto' }}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        // mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >

      </MapGL>
    </div>
  )
}*/
