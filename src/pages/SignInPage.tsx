import React, { useState } from 'react';
import { login } from '../store/authSlice';
import { authService } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| 'false'));
  const handleSignIn = async () => {
    // eslint-disable-next-line no-mixed-operators
    if(email === '' || undefined && password === ''||undefined){
      alert('Enter the required fields.')
    } else{
      const response = await authService.signIn({ email, password });
      if (response.token) {
        console.log(response.token)
        login({ email, token: response.token });
        setauthenticated('true')
        localStorage.setItem("authenticated", 'true'); 
        navigate("/dashboard");
      } else {
        console.log('Invalid credentials. Please try again.');
      }
      }
    } 
    return(
       <div className="flex items-center justify-center h-screen">
    <div className="w-96 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="button"
            className="w-full bg-green-500 text-white p-2 rounded"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <div className="mb-4">
            <p>Don't have Account?<a href='/SignUp'>SignUp</a></p>
          </div>
        </form>
        </div>
    </div>
    )
}