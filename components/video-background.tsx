"use client"

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        preload="metadata"
      >
        {/* Place the video in /public/videos/hero-bg.mp4 */}
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0A0B45]/70"></div>
    </div>
  )
}
