import React from "react";

const SkeletonCard = (props) => {
  return [...Array(props.count)].map(() => {
    return (
      <div class="w-96 border-0 rounded-md mx-auto mt-5">
        <div class="flex-col animate-pulse items-start h-full">
          <div class="w-full bg-gray-300 h-32 rounded mb-3"></div>
          <div class="flex-col space-y-3">
            <div class="w-full bg-gray-300 h-6 rounded-md"></div>
            <div class="w-64 bg-gray-300 h-6 rounded-md"></div>
            <div class="w-52 bg-gray-300 h-6 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  });
};

export default SkeletonCard;
