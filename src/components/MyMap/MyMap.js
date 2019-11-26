import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

import styles from './MyMap.module.css';
import { getCoords, getIsOrderMade } from '../../store/selectors';

class MyMap extends Component{
    static propTypes = {
        orderCoords: PropTypes.array,
        isOrderMade: PropTypes.bool.isRequired
    }

    map = null;
    mapContainer = React.createRef();
  
    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoienJpbnVzIiwiYSI6ImNrMm5qbmxvMDBhMnYzZ3M3cTY0Y2NuczEifQ.XvZ9VKAzmgne5EDCsmMohg";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/zrinus/ck2uk3ue30u7x1cpjop59yc35",
        center: [71.4388595, 51.1509206],
        zoom: 15
      });
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props) {
            const { isOrderMade, orderCoords } = this.props
        
            if(!isOrderMade && this.map.getLayer('route')){
                this.map.removeLayer('route');
                this.map.removeSource('route');
            }
            
            if(isOrderMade && orderCoords && orderCoords.length > 0) {
                if(prevProps.orderCoords !== orderCoords) this.renderRoute()
            }
        }
    }

    renderRoute = () => {
        const { orderCoords } = this.props;
        this.map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {
                        color: '#45f6df' 
                    },
                    geometry: {
                        type: 'LineString',
                        coordinates: orderCoords
                    }
                }
            }, 
            paint: {
                'line-width': 9,
                'line-color': ['get', 'color']
            }
        })

        this.map.flyTo({
            center: orderCoords[0]
        })
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      return <div className={styles.container} ref={this.mapContainer} />;
    }
}

const mapStateToProps = state => ({
    orderCoords: getCoords(state),
    isOrderMade: getIsOrderMade(state)
});

export default connect(mapStateToProps, null)(MyMap)