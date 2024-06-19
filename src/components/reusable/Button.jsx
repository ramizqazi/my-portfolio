'use client';
import ClipLoader from 'react-spinners/ClipLoader';

function Button({ title, loading, ...props }) {
  return (
    <button {...props}>
      {!loading ? title : <ClipLoader color="white" size={25} />}
    </button>
  );
}

export default Button;
