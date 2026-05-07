import "./App.scss";
import MarkerIcon from "./assets/markerIcon.svg";
import { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

function App() {
  // 위치 정보 배열 상태로 관리 
  const [locations, setLocations] = useState([]);

  // 기본 위치 더미 데이터 (null)
  const [center, setCenter] = useState({ lat: null, lng: null });

  // 시작시 초기 현재 위치 정보 업데이트
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // 초기 현재 위치 정보 설정
      const initLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        isOpen: false
      };

      // 위치 정보 배열에 초기 현재 위치 추가
      setLocations([initLocation]);

      // 지도 중심 위치 업데이트
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }, []);

  // 지도 클릭 이벤트 핸들러
  const handleMapClick = (map, mouseEvent) => {
    // 클릭한 위치의 위도와 경도 정보 가져오기
    const latlng = mouseEvent.latLng;

    // 마커 위치 배열 업데이트
    const newLocation = {
      lat: latlng.getLat(),
      lng: latlng.getLng(),
      isOpen: false
    };

    setLocations(prevLocations => [...prevLocations, newLocation]);
  }

  // 커스텀 오버레이 클릭 이벤트 핸들러
  const handleOverlayClick = (index) => {
    
    setLocations(prevLocations => (
      prevLocations.map((location, i) => 
        // i === index => 클릭한 번호만 해당
        // 클릭한 번호의 스위치만 상태를 반전, 나머지는 그대로 유지
        (i === index) ? { ...location, isOpen: !location.isOpen } : location 
      ))
    );
  };

  return (
    <div className="container">
      <Map center={center} className="map" onClick={handleMapClick}>
        {locations.map((location, index) => (
          <>
            <MapMarker
              key={index}
              position={location}
              image={{
                src: MarkerIcon,
                size: { width: 30, height: 42 },
                options: { offset: { x: 15, y: 42 } }
              }}
              onClick={() => handleOverlayClick(index)}
            />
            
            {/* 커스텀 오버레이의 isOpen 상태에 따라 표시 */}
            {location.isOpen && (
              <CustomOverlayMap
                key={`overlay-${index}`}
                position={location}
              >
                <div className="overlay">
                  <p>📍 마커 번호: {index + 1}</p>
                  <p>🗺️ 위도: {location.lat.toFixed(3)}</p>
                  <p>🧭 경도: {location.lng.toFixed(3)}</p>
                </div>
              </CustomOverlayMap>
            )}
          </>
        ))}
      </Map>
    </div>
  );
}

export default App;