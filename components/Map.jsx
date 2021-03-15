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
        return(
          <div key={`${node.id}`}>
            <Marker position={[parseFloat(node.data.geolocation.lat), parseFloat(node.data.geolocation.lon)]}>
              <Popup>
                <LinkBox>
                <Flex alignItems="center">
                {node.data.image &&
                  <Image
                    src={node.data.image[0].url}
                    alt="Node logo"
                    maxWidth={"50%"}
                    height={8}
                />
                }
                  <Heading size="sm" paddingLeft="4">
                    {
                      node.data.url || node.data.urls ?
                        <a href={node.data.url || node.data.urls[0].url}  target="_blank" rel="noopener noreferrer">
                          <LinkOverlay wordBreak="break-all">{node.data.name}</LinkOverlay>
                        </a> 
                          : 
                        <LinkOverlay wordBreak="break-all">{node.data.name}</LinkOverlay>
                    }
                  </Heading>
                </Flex>
                  <Text>
                    {node.data.description}
                  </Text>
                </LinkBox>
              </Popup>
            </Marker>
          </div>
          )    
      })}
    </MapContainer>
  )
}

export default Map