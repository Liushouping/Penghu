import 'intersection-observer';

export default function (context) {
  // 在客户端注册 Intersection Observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 图片进入视口，加载图片
        entry.target.src = entry.target.dataset.src;
        // 停止观察已加载的图片
        observer.unobserve(entry.target);
      }
    });
  });

  // 获取所有需要延迟加载的图片元素
  const lazyImages = document.querySelectorAll('img.lazy');
  lazyImages.forEach(image => {
    observer.observe(image);
  });
}
