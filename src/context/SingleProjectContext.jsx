'use client';
import {createContext} from 'react';
import {usePathname} from 'next/navigation';
import {InfinitySpin} from 'react-loader-spinner';

import {useGetProjectById} from '../../sanity/lib/queries';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({children}) => {
  const pathname = usePathname();
  const idMatch = pathname.match(/\/projects\/([^/]+)/);
  const id = idMatch?.[1];
  const {data, isLoading} = useGetProjectById(id);

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
