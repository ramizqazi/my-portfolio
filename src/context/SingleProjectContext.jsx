'use client';
import { createContext } from 'react';
import { usePathname } from 'next/navigation';
import { InfinitySpin } from 'react-loader-spinner';

import { useGetProjectById } from '../../sanity/lib/queries';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const params = useParams()
  const id = params;
  const { data, isLoading } = useGetProjectById(id);

  return (
    <SingleProjectContext.Provider value={data}>
      {!isLoading ? (
        children
      ) : (
        <div className="flex justify-center">
          <InfinitySpin width="200" color="#6366f1" />
        </div>
      )}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
