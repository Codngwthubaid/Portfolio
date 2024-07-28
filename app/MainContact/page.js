import React from 'react'
import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from '@/components/Map';

const MainContact = () => {
  return (
    <>
      <div>
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </>
  )
}

export default MainContact
