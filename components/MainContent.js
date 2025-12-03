
import React from 'https://esm.sh/react@18.2.0';

const MainContent = () => {
  // The video file should be placed in the public folder of your project.
  // For example, if your public folder is `public`, place the video as `public/video.mp4`.
  const videoSrc = "/video.mp4";

  return (
    <main className="w-full max-w-5xl flex flex-col items-center gap-6 sm:gap-8 text-center">
      <h1 className="font-zcool text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-outline tracking-wider">
        第43届丰台区学生科技节总结会
      </h1>
      
      <div className="w-full max-w-3xl aspect-video bg-black/50 rounded-lg shadow-2xl shadow-cyan-500/20 border-2 border-cyan-400/30 overflow-hidden">
        <video
          src={videoSrc}
          controls
          autoPlay
          muted // Autoplay with sound is often blocked by browsers, so we mute it by default.
          className="w-full h-full"
          aria-label="Student Science & Technology Festival Summary Video"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-white/90 text-sm sm:text-base lg:text-lg space-y-2">
        <p>主办单位：北京市丰台区教育委员会</p>
        <p>承办单位：北京市丰台区东高地青少年科技馆</p>
      </div>
    </main>
  );
};

export default MainContent;
