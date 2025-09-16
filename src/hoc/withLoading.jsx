import { memo } from "react";

function withLoading(WrappedComponent) {
  const ComponentWithLoading = ({ isLoading }) => {
    return !isLoading ? (
      <WrappedComponent />
    ) : (
      <div className="size-12 border-4 border-slate-400 border-l-transparent border-b-transparent animate-spin rounded-full"></div>
    );
  };

  return memo(ComponentWithLoading);
}

export default withLoading;
