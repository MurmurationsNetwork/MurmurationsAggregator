import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import { Heading, Image, LinkBox, LinkOverlay, Flex, Text } from "@chakra-ui/react"

import 'leaflet/dist/leaflet.css'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png'
});


const Map = ({nodes}) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false} style={{height: "70vh", width: "85%", margin: "auto"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nodes.map((node) => {
        if (node.data) {
          const id = node.id;
          node = node.data;
          node.id = id;
        }
        return(
          <div key={`${node.id || node.objectID}`}>
            {node.geolocation ?
            (<Marker position={[parseFloat(node.geolocation.lat), parseFloat(node.geolocation.lon)]}>
            <Popup>
              <LinkBox>
              <Flex alignItems="center">
              {node.image &&
                <Image
                  src={node.image[0].url}
                  alt="Node logo"
                  maxWidth={"50%"}
                  height={8}
              />
              }
              <Heading size="sm" paddingLeft="4">
                  {
                    node.url || node.urls ?
                      <a href={node.url || node.urls[0].url}  target="_blank" rel="noopener noreferrer">
                        <LinkOverlay wordBreak="break-all">{node.name}</LinkOverlay>
                      </a> 
                        : 
                      <LinkOverlay wordBreak="break-all">{node.name}</LinkOverlay>
                  }
              </Heading>
              </Flex>
              {node.description && 
                <Text>
                    {node.description.length > 250 ? `${node.description.slice(0,250)}...`: node.description}
                </Text>
              }
              </LinkBox>
            </Popup>
          </Marker>):
          null}
            
          </div>
          )    
      })}
    </MapContainer>
  )
}

export default Map
