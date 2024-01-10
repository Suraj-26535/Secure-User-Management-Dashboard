// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../store/authSlice';
// import { authService } from '../services/api';

// const Home: React.FC = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [error, setError] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const response = await authService.signIn({ email, password });

//       if (response.token) {
//         dispatch(login({ email, token: response.token }));
//       } else {
//         console.log('Invalid credentials. Please try again.');
//       }
//     } catch (error) {
//       console.log('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-96 bg-white p-8 rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

//         {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               className="w-full border border-gray-300 rounded p-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               className="w-full border border-gray-300 rounded p-2"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="button"
//             className="w-full bg-blue-500 text-white p-2 rounded"
//             onClick={handleSignIn}
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;
// src/pages/DashboardPage.tsx

import React from 'react';
import { useEffect, useState } from "react";

const DashboardPage: React.FC = () => {
  const [authenticated, setauthenticated] = useState('');
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

          <div>
            <p>Welcome,</p>
            <p>To the world of WebReinvent.</p>
          </div>
      </div>
    </div>
  );
};

export default DashboardPage;
