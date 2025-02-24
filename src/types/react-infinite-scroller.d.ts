declare module 'react-infinite-scroller' {
  import React from 'react';

  interface InfiniteScrollProps {
    pageStart?: number;
    loadMore: (page: number) => void;
    hasMore: boolean;
    loader?: React.ReactNode;
    threshold?: number;
    useWindow?: boolean;
    initialLoad?: boolean;
    getScrollParent?: () => React.ReactNode | null;
    children?: React.ReactNode;
  }

  const InfiniteScroll: React.FC<InfiniteScrollProps>;

  export default InfiniteScroll;
}
