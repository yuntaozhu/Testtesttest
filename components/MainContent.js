
import React from 'https://esm.sh/react@18.2.0';

const MainContent = () => {
  const videoSrc = "/video.mp4";

  return React.createElement(
    'main',
    { className: 'w-full max-w-5xl flex flex-col items-center gap-6 sm:gap-8 text-center' },
    React.createElement(
      'h1',
      { className: 'font-zcool text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-outline tracking-wider' },
      '第43届丰台区学生科技节总结会'
    ),
    React.createElement(
      'div',
      { className: 'w-full max-w-3xl aspect-video bg-black/50 rounded-lg shadow-2xl shadow-cyan-500/20 border-2 border-cyan-400/30 overflow-hidden' },
      React.createElement(
        'video',
        {
          src: videoSrc,
          controls: true,
          autoPlay: true,
          muted: true,
          className: 'w-full h-full',
          'aria-label': 'Student Science & Technology Festival Summary Video'
        },
        'Your browser does not support the video tag.'
      )
    ),
    React.createElement(
      'div',
      { className: 'text-white/90 text-sm sm:text-base lg:text-lg space-y-2' },
      React.createElement('p', null, '主办单位：北京市丰台区教育委员会'),
      React.createElement('p', null, '承办单位：北京市丰台区东高地青少年科技馆')
    )
  );
};

export default MainContent;
