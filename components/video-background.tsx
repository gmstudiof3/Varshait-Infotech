"use client"

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover" preload="metadata">
        <source
          src="https://www.dropbox.com/scl/fi/r7ohwlnvrjrusarxctcd7/GettyImages-636463142.mov?rlkey=cwcrw8ybgdhosx5fn8sojvf1s&st=m4k120ho&dl=1"
          type="video/mp4"
        />
        {/* Fallback gradient background */}
      </video>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  )
}
