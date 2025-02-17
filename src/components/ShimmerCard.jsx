import React from 'react';

const ProductCardShimmer = () => {
  return (
    <div className='flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-6'>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
      <SingleShimmer/>
    </div>
    
    
  );
};

export default ProductCardShimmer;

const SingleShimmer =()=>{
  return(
    <div className="max-w-xs w-full border-2 border-gray-300 bg-white rounded-lg shadow-lg animate-pulse m-3">
      <div className="bg-gray-300 h-64 w-full rounded-t-lg"></div>
      <div className="p-4 space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  )
}