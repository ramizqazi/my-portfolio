/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery} from 'react-query';
import {client} from './client';

/**
 * Get Projects
 */
export const useGetProjects = () =>
  useQuery(['project'], async () => {
    const payload = await client.fetch(`*[_type=="project"]`);

    return payload;
  });

/**
 * Get Project by id
 */
export const useGetProjectById = id =>
  useQuery(['project', id], async () => {
    const payload = await client.fetch(
      `*[_type=="project"  && _id=="${id}"][0]`,
    );

    return payload;
  });
