import { useState, useEffect } from 'react';

const useDocTitle = (title: string) => {
  title = `${title} - 轻松租房 乐享生活`;
  const [doctitle, setDocTitle] = useState<string>(title);

  useEffect(() => {
    document.title = doctitle;
  }, [doctitle]);

  return [doctitle, setDocTitle];
};

export { useDocTitle };
