import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useState } from "react";
import { RotateCw, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PanoramaSceneProps {
  image: string;
  onLoad?: () => void;
}

function PanoramaScene({ image, onLoad }: PanoramaSceneProps) {
  const texture = useTexture(image, (txt) => {
    if (onLoad) onLoad();
  });
  
  // Flip the texture horizontally because we are inside the sphere
  // and using BackSide makes it mirrored otherwise
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1; 

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial 
        map={texture} 
        side={THREE.BackSide} 
      />
    </mesh>
  );
}

interface PanoramaViewerProps {
  image: string;
}

export function PanoramaViewer({ image }: PanoramaViewerProps) {
  const { t } = useTranslation();
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-black border border-white/10 group cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <Suspense fallback={<Html center><div className="text-gold-500"><Loader2 className="animate-spin w-8 h-8" /></div></Html>}>
          <PanoramaScene image={image} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={-0.5} // Negative to match natural drag direction
            autoRotate={!isInteracting}
            autoRotateSpeed={0.5}
            onStart={() => setIsInteracting(true)}
            onEnd={() => setIsInteracting(false)}
          />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Overlay UI */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-20">
        <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-3 text-white/70 text-[10px] uppercase tracking-widest">
          <RotateCw size={14} className={isInteracting ? "" : "animate-spin-slow"} />
          <span>{t('roomDetail.dragToRotate') || "Çevirmek için sürükleyin"}</span>
        </div>
      </div>
    </div>
  );
}