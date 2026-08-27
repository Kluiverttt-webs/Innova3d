"use client";

import { useEffect, useRef, useState } from "react";

type ProcessVideoProps = {
  src: string;
};

export function ProcessVideo({ src }: ProcessVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    const startPlayback = async () => {
      try {
        video.muted = false;
        await video.play();
        if (!cancelled) setIsMuted(false);
      } catch {
        video.muted = true;
        if (!cancelled) setIsMuted(true);

        try {
          await video.play();
        } catch {
          if (!cancelled) setHasError(true);
        }
      }
    };

    void startPlayback();

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (video.paused) {
      try {
        await video.play();
        setHasError(false);
      } catch {
        setHasError(true);
      }
    }
  };

  return (
    <div className="video-frame">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        controls
        preload="auto"
        aria-label="Video del proceso de trabajo de Innova 3D"
        onError={() => setHasError(true)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
      />
      {!hasError && (
        <button
          className="video-sound-button"
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Activar el sonido del video" : "Silenciar el video"}
        >
          {isMuted ? "Activar sonido" : "Silenciar"}
        </button>
      )}
      {hasError && (
        <p className="video-error" role="status">
          No se pudo reproducir el video automáticamente. Usa los controles para iniciarlo.
        </p>
      )}
    </div>
  );
}
